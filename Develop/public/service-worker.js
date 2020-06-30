const FILES_TO_CACHE = [
"/",
"/index.html",
"/icons/icon-192x192.png",
"/icons/icon-512x512.png",
"/index.js",
"/styles.css"
];

const CACHE_NAME = "budget-app";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });