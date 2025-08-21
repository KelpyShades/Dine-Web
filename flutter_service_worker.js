'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "098f29ec14cf77ae02ae391e393abc1c",
"assets/AssetManifest.bin.json": "63d81e084442510e628c1e308e066d46",
"assets/AssetManifest.json": "caf99d6db38da403dab0a25b48127624",
"assets/assets/fonts/Inter.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/Poppins.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/images/all.png": "eef792aecd735a260768cd48f7270e49",
"assets/assets/images/dessert.png": "bf2bc75ad4e632dcebceefbe0c1ae1e9",
"assets/assets/images/drink.png": "1e069f3bba7f289286e419b3c02109b1",
"assets/assets/images/icon.png": "981a9d2bc1d410f863bec4a80fdd4768",
"assets/assets/images/logo.png": "e42038541ccd94f847e7f82796fc8499",
"assets/assets/images/meal.png": "9b43d82044c952dedb0ea26cce104f87",
"assets/assets/images/snack.png": "0f62a7829f50e424a2eac61ed575ea4c",
"assets/assets/images/splash.png": "d11d2edeec00442b021e0be266b622cc",
"assets/FontManifest.json": "16556452b30aec2e9656040764165e66",
"assets/fonts/MaterialIcons-Regular.otf": "5657b3b2be6d56a3b7a01f19c794e859",
"assets/NOTICES": "3d57641d28f5a847245b0d7357b9d44e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "953e0ad456661ea0e72503d5fe5c4d47",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "3ba6eb8cdfc2a44543322bd5635e51c8",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2d8b0aa8d9d4bb6a4c3532ed919a5408",
"icons/Icon-192.png": "e08f380fc5bdfcdc2075f19fe12e47a2",
"icons/Icon-512.png": "2ae91b2d988b46e71c716125956a0f86",
"icons/Icon-maskable-192.png": "e08f380fc5bdfcdc2075f19fe12e47a2",
"icons/Icon-maskable-512.png": "2ae91b2d988b46e71c716125956a0f86",
"index.html": "134b835db870816b80841fbafac737da",
"/": "134b835db870816b80841fbafac737da",
"main.dart.js": "dea2e9c5cc066370b057b27fe9522356",
"manifest.json": "397d9c97b6dac10f6ff062ca390e261a",
"splash/img/dark-1x.png": "61f469b911c78b6d2991d0c87b3adb56",
"splash/img/dark-2x.png": "60a2e9a23a2dcdf158038999f68d9663",
"splash/img/dark-3x.png": "27e36328d33c7dbb9907bf87e35fb122",
"splash/img/dark-4x.png": "d8400bb49d69eed338e7c668ef35eeee",
"splash/img/light-1x.png": "61f469b911c78b6d2991d0c87b3adb56",
"splash/img/light-2x.png": "60a2e9a23a2dcdf158038999f68d9663",
"splash/img/light-3x.png": "27e36328d33c7dbb9907bf87e35fb122",
"splash/img/light-4x.png": "d8400bb49d69eed338e7c668ef35eeee",
"version.json": "042e77d9310d646aa17cffc5cadf9eaa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
