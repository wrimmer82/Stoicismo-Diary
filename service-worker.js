const CACHE_NAME = 'stoic-journey-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/accedi.html',
  '/registrazione.html',
  '/cosa-e-stoicismo.html',
  '/sigma_logo.png',
  '/colonnato_restaurato%20WebP%20mini.webp',
  '/busto_1_spalle.png',
  '/busto_2_semplice.png',
  '/busto_3_semplice.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
