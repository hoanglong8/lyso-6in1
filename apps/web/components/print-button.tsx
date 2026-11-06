"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm hover:border-son print:hidden">
      In / lưu PDF
    </button>
  );
}
