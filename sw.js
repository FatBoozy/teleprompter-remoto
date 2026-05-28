var cacheName = 'v3:static';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './',
        './assets/css/style.v122.css',
        './assets/css/font-awesome.min.css',
        './assets/js/plugins.v122.js',
        './assets/js/script.v122.js'
      ]).then(function() {
        self.skipWaiting();
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== cacheName; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  // Only handle same-origin requests — let the browser deal with
  // cross-origin requests (port 3000: socket.io, API) natively.
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
