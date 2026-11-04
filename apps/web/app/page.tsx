import Link from "next/link";

const MON = [
  { ten: "Tử vi", loai: "Lá số của tôi", mo: "12 cung, hơn 100 sao, đại hạn, lưu niên", trangThai: "Beta" },
  { ten: "Bát tự (Tứ trụ)", loai: "Lá số của tôi", mo: "4 trụ can chi, thập thần, đại vận", trangThai: "Beta" },
  { ten: "Kinh dịch", loai: "Hỏi một việc", mo: "Mai Hoa, Lục hào nạp giáp, gieo xu", trangThai: "Beta" },
  { ten: "Đại Lục Nhâm", loai: "Hỏi một việc", mo: "Thiên địa bàn, tứ khóa, tam truyền, thiên tướng", trangThai: "Beta" },
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
        <div className="flex flex-wrap gap-3">
          <Link href="/la-so" className="inline-block rounded-lg bg-son px-5 py-2.5 font-medium text-white hover:opacity-90">
            Lập lá số Tử vi &amp; Bát tự
          </Link>
          <Link href="/lich" className="inline-block rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-medium hover:border-son">
            Lịch &amp; giờ sinh
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/la-so" className="rounded-xl border border-stone-200 bg-white p-5 hover:border-son">
          <h2 className="text-lg font-semibold">Lá số của tôi →</h2>
          <p className="mt-1 text-sm text-stone-600">Luận theo ngày giờ sinh: Tử vi, Bát tự. Nhập hồ sơ một lần, dùng lại cho mọi môn.</p>
        </Link>
        <Link href="/chiem" className="rounded-xl border border-stone-200 bg-white p-5 hover:border-son">
          <h2 className="text-lg font-semibold">Hỏi một việc →</h2>
          <p className="mt-1 text-sm text-stone-600">
            Chiêm theo thời điểm hỏi: Kinh dịch, Đại Lục Nhâm (đã có); Kỳ môn, Thái ất (sắp có).
          </p>
        </Link>
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
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs ${m.trangThai === "Beta" ? "bg-son-soft text-son" : "bg-stone-100 text-stone-600"}`}>{m.trangThai}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
