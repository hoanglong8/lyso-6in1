// Service worker: lưu sẵn trang và tài nguyên tĩnh để dùng khi mất mạng. Không lưu dữ liệu người dùng, không chặn /api.
const CACHE = "lyso-v1";
const PAGES = ["/", "/la-so", "/chiem", "/hop-tuoi", "/chon-ngay", "/lich", "/huong-dan"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PAGES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.startsWith("/api") || u.pathname.startsWith("/auth")) return;
  if (u.pathname.startsWith("/_next/static/") || /\.(png|svg|ico|woff2?)$/.test(u.pathname)) {
    // tài nguyên có băm trong tên: lấy từ bộ nhớ trước
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { const c = res.clone(); caches.open(CACHE).then((x) => x.put(e.request, c)); return res; })));
    return;
  }
  if (e.request.mode === "navigate") {
    // trang: lấy mạng trước, mất mạng thì dùng bản đã lưu
    e.respondWith(fetch(e.request).then((res) => { const c = res.clone(); caches.open(CACHE).then((x) => x.put(e.request, c)); return res; }).catch(() => caches.match(e.request).then((r) => r || caches.match("/la-so"))));
  }
});
