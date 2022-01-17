
const cacheName = 'js13kPWA-v1';

const appShellFiles = [
  './index.html',
  '.style.css',
  './images/favicon.png',
  '.images/sunbeam-photography-rthxdhNw06M-unsplash.jpg',
  './main.js',
  './script.js',
  './sworker.js',
];


self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});

self.addEventListener("fetch", function(e) {
    console.log(`start server worker`);
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });