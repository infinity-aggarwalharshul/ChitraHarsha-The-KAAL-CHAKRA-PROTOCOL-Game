const CACHE_NAME = "chitraharsha-v3.2-commercial";
const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "icon.png",
  "cover.png",
  "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Cinzel+Decorative:wght@700&family=Rajdhani:wght@500;700&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("index.html");
          }
        })
      );
    }),
  );
});
