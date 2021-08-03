'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "516eb078b5ad96f191c9131dbc0554ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8ed08ae68973c68d699b06815fd46c45",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "390e1a4982bd8dc5d182716ce788b61d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da6568a8a8ba88e9b4ebf2ac8ba44ec4",
".git/logs/refs/heads/main": "da6568a8a8ba88e9b4ebf2ac8ba44ec4",
".git/logs/refs/remotes/origin/main": "e9aadcdc6522051690430ed031de117a",
".git/objects/00/4cd1b9e56cf7cc6e3f1ed0d877f60e7c5028b6": "1e6e38a86b1dffaaa981cda529a3e04f",
".git/objects/03/5bdf403edbcce4cdc25dbf2ebb057eb09ee21c": "11966d675867b022b183042e2ef73bbb",
".git/objects/03/7a1366fce84ec4c58db4b6db396c29ae2c9173": "ab819fe7bc59bd2251da14afc12a8356",
".git/objects/04/ce5090e7c210d5cbec51be36c787ef89979415": "c8b1fb5f95ee82fca29575817c92c45d",
".git/objects/05/3f2363ba6647582e27f6d1287454490e6b927e": "bff7491b22156cc94285dfd3c3498b69",
".git/objects/12/aa1f714f3273f7d4e36e6ece5a8f5440a23c99": "59aae4b6917bf3e4d27b75739c6a7326",
".git/objects/14/d0b086c0f86e58be123106e30012613305442e": "6aa44f7e20404d9b52d5a11e672a5aef",
".git/objects/17/61874554936998733c0958d2d2366fbe3b594c": "adbedac05c7e579f79a848c83bcc515d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/74c47eda7dfb9cdc9ac22cf8d40293ac5e5751": "5dab949aca9a3be36462e798f8f6b8da",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/2c/1448df45b3f4b87e95616f19c07f6173aa135a": "e66bfc91840339c0b0abb552d3d5ab40",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/f955854a010cf12be38dcccdf1ad6188ece27f": "2e621de3c83437333550248def916b70",
".git/objects/3f/de023c4b593d109d3ca748349202a04b8f0d6c": "fa1091879836d423be6761ca58f1c44b",
".git/objects/44/854be92c3de7fdda5b5fbc98b263ce52928f62": "6ae8f13f26f6458b45314988d0ef8c83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ad4ef8c842e4bc733dadd3f33fb43d2aaf2bf9": "c35e7153642f9dee75b781e7a7fdf1b0",
".git/objects/4e/28208aaabd9a1da6968303f020886bf6b15f4b": "6641c3ce26b03072648510fc57222d41",
".git/objects/51/ddcf3e34e5b6ae53143914e0465e6d72d5bc45": "2b770bbbcae5a2ccd6b3443bb70478b9",
".git/objects/54/a1819225d5a8011dbe9f15e03fb1ee7505d7dc": "6323cb5f4eae5eb2c5f4f7d29c191c08",
".git/objects/5d/eb23f1300acc4e060d5d6ebdb3cf26a59f3616": "3c2b9e3abe58a1a4b5c840da7cd3b6a5",
".git/objects/65/de2605fcaf8b0acb1f4fa5a26c0ef89f96b486": "e46503bc1f52f8717d7c6e837e6e1f0d",
".git/objects/65/f57e73eedd4da4dfaa0c1b7bf60d10fc69881e": "e0ad9f6ad3780dbbe9bad00ac430c04d",
".git/objects/6e/b268567747c59d8151941c5ffba6792cec678d": "c03723ef04079e6badc32dd46b8dc530",
".git/objects/70/6c1b4b27bd2293222620f7ad6f47512e660683": "a2d9e914decc126124f82c3b72dfdb73",
".git/objects/78/7cab0dd7a3fa75a746139a14dd6086b44071de": "ad14ed648c1e291f3f2854a860d041b7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/1af9227fcf3e59c72a1de9ee244932e707aa2a": "6a7495b707cdc35e2a3cb66ef3a73551",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4316c69dd1d7e9f8d803ee32a22b0feb382680": "551400c15d14f3fc9dc3cf20a2fa9c70",
".git/objects/8d/14e96e04f77e12000bdaa79e5d611754b04c1d": "b3844488bc15d5e093d21baf2524f8e9",
".git/objects/9b/e7ca03f353a95ec99dfa5df1653ad5801c547d": "df15c1c21d77aaffa10722521fe590fb",
".git/objects/9d/07c71f8334c8eeeaee6499d9f3b883d6039ad4": "fa2c28e55b72e7f7b2d6314261945a05",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/039ab1e870d9f2345e2ec6b5268795192c3d9b": "a24b7afae5dd9b87b478725fa5b7be36",
".git/objects/a4/98954c0d582bf3647bac3b6fb615ab2cd25d94": "14badf590b660e78a4a7943672603aee",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/e60f28799e38377ddfce8fd124b44cdbf47a58": "bfef6e46af8060407e17274ece701154",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b6585e8944fcbe731f374235e7ad30105050b3": "9a8e32acd5da82c92aa67116e50864da",
".git/objects/ba/3de1dc829598068e4e00eea3f3f0a0660190df": "a4588d9f71d47283f0a8c2a0560c8812",
".git/objects/bd/96951ee71b47401413148a302051551ead26bd": "89e57cdbaf20425dfe3bc0d0ef7d6677",
".git/objects/c2/a494744fa73773319780f846c2a15d2c5e5e16": "be94644a8eb60a72365357631c367dea",
".git/objects/cc/9ac1111d4746402f4a859a958f46f1f253945d": "b5ddbd91e67df871331a9921cc9b6de8",
".git/objects/d4/5ef398ef0728efaf9ecd73bedeb4b6e1afd076": "e472b268739f1fe4863dd66d68878045",
".git/objects/d5/7991d9cc3bfa6f32b4d8e73f4269022deac85c": "82869f2d34d9384ab5cc09e220558511",
".git/objects/da/c0f52577f68342a7ba5a5f3976c0a027193308": "828fb8cee1ec30b69c396fb5f7a3b967",
".git/objects/da/caf8cfbabf7427467919a145d8c65df2001283": "aee5bbbfe4937710ec6bf2943c010def",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e2/1fb3aa80390741e3ac4467d17c3a18e4b40691": "1c94d87fbcc1d9d7bd90cf88f6a7de68",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/f7e508de61b4f51e17552af89425969e9dd06b": "d9b182b55a38533d07497e3d22bb5a9d",
".git/objects/f0/7aeeffa76a53c668ff2417f5b5dd09bd1c8ff6": "25289761cf99a84b5a2b36cb8876f664",
".git/objects/f8/430771a27f20a4d4c9955c62a1ceceb7084fb0": "49399bef26f8795b5a9294718adea7dd",
".git/objects/ff/2f8731062869dc68f1edf23ea50f602ef9d205": "1c08503bbbf2f66d5db87e165fa74b75",
".git/ORIG_HEAD": "52dde9d97ac774b63d56fffcee9af953",
".git/refs/heads/main": "059c6ac3d53e7d3bf0c3d43a0585d600",
".git/refs/remotes/origin/main": "059c6ac3d53e7d3bf0c3d43a0585d600",
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
"index.html": "d44311331d263ea0488bf7a603ec5785",
"/": "d44311331d263ea0488bf7a603ec5785",
"main.dart.js": "483a49cbe9d81eb5d0d896a437fc2b40",
"manifest.json": "65a6a34a2ecb9bf4e3e2cfb6c60bafc9",
"README.md": "445e5b1d0da10247fb28b54a9667b31f",
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
