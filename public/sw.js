self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/public/assets/ic1.png',
        '/public/assets/lg3.png',        
        '/public/assets/pr1.jpg',      
        '/public/assets/pr2.jpg',    
        '/public/assets/pr3.jpg',    
        '/public/assets/pr4.jpg',    
        '/public/assets/pr5.jpg',    
        '/public/assets/pr6.jpg',    
        '/public/assets/pr7.jpg',    
        '/public/assets/pr8.jpg',    
        '/public/assets/pr9.jpg',    
        '/public/assets/pr10.jpg',                                                                              
        '/public/assets/pr11.jpg',            
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return caches.open('pwa-cache').then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('pwa-cache').then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});
