// Tiny service worker for the installed admin app.
// Pages are always loaded fresh from the network; a saved copy is only used when offline.
// Data (Supabase) is never cached.
const CACHE = "dza-rub-admin-v1";
const SHELL = ["admin.html", "admin.css", "config.js", "icons/icon-192.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;   // Supabase etc. untouched
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok && SHELL.some((p) => url.pathname.endsWith(p))) {
        const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
