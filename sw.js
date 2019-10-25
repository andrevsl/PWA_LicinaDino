var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/photograph.mp3',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/img/IMG-20191007-WA0016.jpg',
  '/img/IMG-20191007-WA0019.jpg',
  '/img/IMG-20191007-WA0021.jpg',
  '/img/IMG-20191007-WA0025.jpg',
  '/img/IMG-20191007-WA0028.jpg',
  '/img/IMG-20191007-WA0033.jpg',
  '/img/IMG-20191007-WA0054.jpg',
  '/img/IMG-20191007-WA0056.jpg',
  '/img/IMG-20191007-WA0057.jpg',
  '/img/IMG-20191007-WA0058.jpg',
  '/img/IMG-20191007-WA0061.jpg',
  '/img/IMG-20191007-WA0073.jpg',
  '/img/IMG-20191007-WA0074.jpg',
  '/img/IMG-20191007-WA0086.jpg',
  '/img/IMG-20191007-WA0091.jpg',
  '/img/IMG-20191007-WA0093.jpg',
  '/img/IMG-20191007-WA0094.jpg',
  '/img/IMG-20191007-WA0095.jpg',
  '/img/IMG-20191007-WA0101.jpg',
  '/img/IMG-20191007-WA0113.jpg',
  '/img/IMG-20191007-WA00211.jpg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
