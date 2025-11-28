const CACHE_NAME = "sentinel-cache-v1";
const OFFLINE_URLS = ["/", "/index.html", "/favicon.ico", "/placeholder.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_URLS);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Houd navigaties (SPA shell) online-first met offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html")),
    );
    return;
  }

  // Voor andere requests: probeer netwerk, val terug op cache.
  event.respondWith(
    fetch(request).catch(() => caches.match(request)),
  );
});