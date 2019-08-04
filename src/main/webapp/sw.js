//The version needs to be change everytime any of the files saved in cache are modify.
const staticCacheName = 'site-static-v6';
const assets = [
    '/',
    '/index.html',
    '/pages/photographer.html',
    '/pages/ScheduleEvent.html',
    '/js/app.js',
    '/js/main.js',
    '/js/photographer.js',
    '/css/index.css',
    '/css/photographer.css',
    '/img/Logotipo-Royal_Secundario.png',
    '/img/NewTabIcon.png',
    '/https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
];
// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });
// activate event
self.addEventListener('activate', evt => {
    //clean the cache to use only the new version of files.
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys =>{
            console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete())
            )
        })
    )
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
  });