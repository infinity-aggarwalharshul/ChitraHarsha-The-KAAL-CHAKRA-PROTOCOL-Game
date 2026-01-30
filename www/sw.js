const CACHE_NAME = "chitraharsha-v3.1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Cinzel+Decorative:wght@700&family=Rajdhani:wght@500;700&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
