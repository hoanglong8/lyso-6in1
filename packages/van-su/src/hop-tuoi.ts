/**
 * Xem hợp tuổi hai người theo các phép thông dụng: địa chi năm, thiên can năm, nạp âm, cung phi Bát trạch,
 * can chi ngày (Bát tự). Chỉ để tham khảo — không thay quyết định về hôn nhân, hợp tác.
 */
import { CAN, CHI, type CalendarSnapshot } from "@lyso/calendar-vn";
import { napAm } from "@lyso/engine-bazi";
import { canHop, canKhac, cungPhi, DONG_TU, duNien, KHAC, lucHai, lucHop, lucXung, SINH, tamHop } from "./chung";

export interface Nguoi { ten: string; gioi: "nam" | "nu"; s: CalendarSnapshot }
export interface Muc { nhom: string; text: string; diem: number; canCu: string }
export interface KetQuaHopTuoi { muc: Muc[]; diem: number; toiDa: number; ketLuan: string; tuoi: [string, string] }

const hanhNapAm = (s: string) => ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"].find((h) => s.endsWith(h)) ?? "";

function chiQuanHe(a: number, b: number, nhom: string, vai: string): Muc | null {
  const cc = `${CHI[a]} – ${CHI[b]}`;
  if (a === b) return { nhom, text: `${vai} cùng chi ${CHI[a]}: hiểu nhau, nhưng dễ giống tính mà va chạm.`, diem: 0, canCu: cc };
  if (tamHop(a, b)) return { nhom, text: `${vai} tam hợp: dễ đồng lòng, hỗ trợ nhau.`, diem: 2, canCu: cc };
  if (lucHop(a, b)) return { nhom, text: `${vai} lục hợp: gắn bó, bù trừ cho nhau.`, diem: 2, canCu: cc };
  if (lucXung(a, b)) return { nhom, text: `${vai} lục xung: dễ bất đồng, cần nhường nhịn.`, diem: -2, canCu: cc };
  if (lucHai(a, b)) return { nhom, text: `${vai} lục hại: dễ hiểu lầm, nên nói rõ với nhau.`, diem: -1, canCu: cc };
  return { nhom, text: `${vai} không hợp không xung.`, diem: 0, canCu: cc };
}

export function hopTuoi(a: Nguoi, b: Nguoi): KetQuaHopTuoi {
  const muc: Muc[] = [];
  const ya = a.s.ganzhi.year, yb = b.s.ganzhi.year;
  // 1. Địa chi năm
  muc.push(chiQuanHe(ya.chi, yb.chi, "Địa chi năm", "Tuổi")!);
  // 2. Thiên can năm
  const cc = `${CAN[ya.can]} – ${CAN[yb.can]}`;
  if (canHop(ya.can, yb.can)) muc.push({ nhom: "Thiên can năm", text: "Can năm ngũ hợp: dễ thu hút, tâm đầu ý hợp.", diem: 2, canCu: cc });
  else if (canKhac(ya.can, yb.can) || canKhac(yb.can, ya.can)) muc.push({ nhom: "Thiên can năm", text: `Can năm tương khắc (${canKhac(ya.can, yb.can) ? a.ten : b.ten} khắc người kia): một bên hay lấn át, nên cân bằng vai trò.`, diem: -1, canCu: cc });
  else muc.push({ nhom: "Thiên can năm", text: "Can năm bình hòa.", diem: 0, canCu: cc });
  // 3. Nạp âm bản mệnh
  const na = napAm(ya), nb = napAm(yb);
  const ha = hanhNapAm(na), hb = hanhNapAm(nb);
  let t = "Bản mệnh cùng hành: hòa hợp, ít xung.", d = 1;
  if (SINH[ha] === hb) { t = `Mệnh ${a.ten} (${ha}) sinh mệnh ${b.ten} (${hb}): ${a.ten} hay vun đắp cho người kia.`; d = 2; }
  else if (SINH[hb] === ha) { t = `Mệnh ${b.ten} (${hb}) sinh mệnh ${a.ten} (${ha}): ${b.ten} hay vun đắp cho người kia.`; d = 2; }
  else if (KHAC[ha] === hb) { t = `Mệnh ${a.ten} (${ha}) khắc mệnh ${b.ten} (${hb}): ${b.ten} dễ chịu thiệt, cần tôn trọng nhau.`; d = -2; }
  else if (KHAC[hb] === ha) { t = `Mệnh ${b.ten} (${hb}) khắc mệnh ${a.ten} (${ha}): ${a.ten} dễ chịu thiệt, cần tôn trọng nhau.`; d = -2; }
  muc.push({ nhom: "Ngũ hành bản mệnh", text: t, diem: d, canCu: `${na} – ${nb}` });
  // 4. Cung phi Bát trạch
  const pa = cungPhi(a.s.lunar.year, a.gioi), pb = cungPhi(b.s.lunar.year, b.gioi);
  const dn = duNien(pa, pb);
  const tot = ["Sinh khí", "Thiên y", "Diên niên", "Phục vị"].includes(dn);
  const cungNhom = DONG_TU.has(pa) === DONG_TU.has(pb);
  muc.push({
    nhom: "Cung phi (Bát trạch)",
    text: `${pa} gặp ${pb} được ${dn}: ${tot ? "cát, hợp ở chung, làm chung" : "hung theo Bát trạch, nên bù bằng cách bố trí nhà cửa, hướng"}. ${cungNhom ? "Hai người cùng nhóm" : "Hai người khác nhóm"} Đông/Tây tứ mệnh.`,
    diem: tot ? 2 : -2,
    canCu: `${a.ten}: ${pa}, ${b.ten}: ${pb}`,
  });
  // 5. Ngày sinh (Bát tự): nhật can, nhật chi
  const da = a.s.ganzhi.day, db = b.s.ganzhi.day;
  if (canHop(da.can, db.can)) muc.push({ nhom: "Nhật trụ (Bát tự)", text: "Nhật can ngũ hợp: hợp tính trong đời sống hằng ngày.", diem: 2, canCu: `${CAN[da.can]} – ${CAN[db.can]}` });
  const nc = chiQuanHe(da.chi, db.chi, "Nhật trụ (Bát tự)", "Nhật chi")!;
  if (nc.diem !== 0) muc.push(nc);
  const diem = muc.reduce((s, m) => s + m.diem, 0);
  const toiDa = 2 * 4 + 2 + 2;
  const tl = diem / toiDa;
  const ketLuan = tl >= 0.5 ? "Khá hợp" : tl >= 0.15 ? "Tương đối hợp" : tl > -0.15 ? "Bình thường — tốt xấu đan xen" : "Có nhiều điểm xung — cần nhường nhịn và hiểu nhau";
  return { muc, diem, toiDa, ketLuan, tuoi: [`${ya.name} (${na})`, `${yb.name} (${nb})`] };
}
