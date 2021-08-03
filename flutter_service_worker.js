'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b4f537b9a168f0232d3fa09bb2bf9afd",
"assets/assets/images/commissioned.jpg": "d96bccb5051f2bf81da82f45dc8bf5ad",
"assets/assets/images/palermo/1.jpg": "726328faebe0c53fcbfac397ea9da935",
"assets/assets/images/palermo/10.jpg": "e18db6188ea95558d196ddd5c034bd0c",
"assets/assets/images/palermo/11.jpg": "efb2d371ebbd3f96b71a6e333935ca6b",
"assets/assets/images/palermo/2.jpg": "3534064fc33f4dacebf6ed1aa5464e1a",
"assets/assets/images/palermo/3.jpg": "11a96484f2a30a1da2aa4f4364facdeb",
"assets/assets/images/palermo/4.jpg": "0c8d7b536e6a1864747a185a233f8f4f",
"assets/assets/images/palermo/5.jpg": "23cffbba4d50baaa8d0928fdf39d95f0",
"assets/assets/images/palermo/6.jpg": "0503924253827583ff68befd1da83c00",
"assets/assets/images/palermo/7.jpg": "954b8c101212bb5db6563e47ff2a8884",
"assets/assets/images/palermo/8.jpg": "22fb0f6004fc234b50c2b5f8ebd32b9e",
"assets/assets/images/palermo/9.jpg": "02fc56d897af430de2cd5598842d0dd8",
"assets/assets/images/palermo.jpg": "c4ff4a0b571090ddf2620c869d9ff321",
"assets/assets/images/photos/1.jpg": "4b766a6a6c43df844dcdb529ec55dfee",
"assets/assets/images/photos/2.jpg": "714c15e75664491542f1aac7faf486f8",
"assets/assets/images/photos/3.jpg": "9f565b30bd6fe727c4006e86d386eed6",
"assets/assets/images/photos/4.jpg": "46f006b853baa9296b4b668d2479b25f",
"assets/assets/images/photos/5.jpg": "2c69f2de0283ddfd1abb734ed5a53c7b",
"assets/assets/images/photos/6.jpg": "894393ad7c7bd2ba53d67c0d4c7a3c15",
"assets/assets/images/photos/7.jpg": "72ab85181981432a818c3cd6d694c5da",
"assets/assets/images/photos/8.jpg": "793c452cdc92209d16ca5fab7abd97fc",
"assets/assets/images/photos.jpg": "8c4c571cb472b0871319aa1be60c5a17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2fda4d558fc0e2a523d1c9189a79b26b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "501af0a5422b17d0d0c862d19ff4e736",
"/": "501af0a5422b17d0d0c862d19ff4e736",
"main.dart.js": "245be0bea44f9bb5c5ef7e0c37ad4466",
"manifest.json": "65a6a34a2ecb9bf4e3e2cfb6c60bafc9",
"version.json": "e9f83f260dad8c4704a533554338b0f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
