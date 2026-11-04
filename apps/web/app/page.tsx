import Link from "next/link";

const MON = [
  { ten: "Tử vi", loai: "Lá số của tôi", mo: "12 cung, hơn 100 sao, đại hạn, lưu niên", trangThai: "Sprint 2" },
  { ten: "Bát tự (Tứ trụ)", loai: "Lá số của tôi", mo: "4 trụ can chi, thập thần, đại vận", trangThai: "Sprint 2" },
  { ten: "Kinh dịch", loai: "Hỏi một việc", mo: "Mai Hoa, Lục hào, gieo xu", trangThai: "Sprint 3" },
  { ten: "Đại Lục Nhâm", loai: "Hỏi một việc", mo: "Thiên địa bàn, tứ khóa, tam truyền", trangThai: "Sprint 3" },
  { ten: "Kỳ môn độn giáp", loai: "Hỏi một việc", mo: "9 cung, cửu tinh, bát môn, bát thần", trangThai: "Sprint 4" },
  { ten: "Thái ất thần số", loai: "Hỏi một việc", mo: "Niên, nguyệt, nhật, thời kế", trangThai: "Sprint 4" },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sáu môn lý số, một nền <span className="text-son">lịch Việt Nam</span>
        </h1>
        <p className="max-w-2xl text-stone-700">
          Mọi môn dùng chung một lõi lịch tính theo UTC+7, có múi giờ lịch sử (miền Nam dùng UTC+8 giai đoạn 1960–1975) và giờ mặt
          trời thực. Trường phái luôn được ghi rõ và có thể đổi.
        </p>
        <Link href="/lich" className="inline-block rounded-lg bg-son px-5 py-2.5 font-medium text-white hover:opacity-90">
          Thử lõi lịch &amp; tứ trụ
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <h2 className="text-lg font-semibold">Lá số của tôi</h2>
          <p className="mt-1 text-sm text-stone-600">Luận theo ngày giờ sinh: Tử vi, Bát tự. Nhập hồ sơ một lần, dùng lại cho mọi môn.</p>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <h2 className="text-lg font-semibold">Hỏi một việc</h2>
          <p className="mt-1 text-sm text-stone-600">
            Chiêm theo thời điểm hỏi: Kỳ môn, Đại Lục Nhâm, Thái ất, Kinh dịch. Có chế độ Tam thức hợp tham.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Tiến độ giai đoạn 1</h2>
        <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
          {MON.map((m) => (
            <li key={m.ten} className="flex items-center justify-between gap-4 px-5 py-3">
              <div>
                <div className="font-medium">{m.ten}</div>
                <div className="text-sm text-stone-600">{m.loai} · {m.mo}</div>
              </div>
              <span className="shrink-0 rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">{m.trangThai}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
