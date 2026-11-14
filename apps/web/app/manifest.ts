import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lý số 6 in 1",
    short_name: "Lý số",
    description: "Tử vi, Bát tự, Kinh dịch, Lục Nhâm, Kỳ môn, Thái ất; hợp tuổi, chọn ngày — tính trên máy, theo lịch Việt Nam.",
    start_url: "/la-so",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#9f1d20",
    lang: "vi",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
