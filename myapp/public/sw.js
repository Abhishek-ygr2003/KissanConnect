const cacheData = 'app-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData)
      .then((cache) => {
        try {
          return cache.addAll([
            '/static/js/bundle.js',
            '/static/js/main.chunk.js',
            '/static/js/0.chunk.js',
            '/index.html',
            '/',
            '/mobiles'
          ]);
        } catch (error) {
          console.error('Error caching files:', error);
          // Handle the error appropriately (e.g., log or retry)
        }
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    navigator.onLine
      ? fetch(event.request)
      : caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          } else {
            // Fallback to network even if offline for requests that cannot be served from cache
            return fetch(event.request).catch((error) => {
              console.error('Error fetching from network:', error);
              // Handle the error, e.g., return a default error response
              return new Response('Network error occurred.', { status: 503 });
            });
          }
        })
  );
});