'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ce929f025f3eada26d04080590d3223f",
".git/config": "5c1593090d4c42c56444941770b4ef14",
".git/cursor_metadata.pb": "7b50198ff9a6d625be770d9cf80533a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bac699668a9c552f3965b636467d9b33",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5cdcf42fa15bd76082b79e019e0b9a7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb5aedc450ccaea2127588e848ee0221",
".git/logs/refs/heads/main": "2831eb34f43010ed140d50a328a01c97",
".git/logs/refs/remotes/origin/HEAD": "be75ba4e42e78b7a090311b39d8c928d",
".git/logs/refs/remotes/origin/main": "7267297fa8d4801e9de0cabcd13fe497",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/c869fc9629244a19f60fe73571a381bf03d842": "87a6214849252341b42c245e04050a11",
".git/objects/06/7807e62950b6459c2ccb21ac48dded6b3a5b71": "c3ffbe62f09b77a010b48d1ca446d1d0",
".git/objects/1b/4cf81cc78187bf474044565696e1ce71e6fed3": "966590882908d896931dbfc419a54cc0",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/27/36c1e5c1112333a7892254524dcbad0650ebda": "15235668968c27c33b8765e847ae4fc9",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/bb1ecac10175314f7409739ec12e50545ca622": "b9614675eff0c9767be4b559f8f3432b",
".git/objects/3d/a2925937ceba45cd9b2abe8d37d4ebc2789524": "219a6fd53e73e14ee87fd946ce05871e",
".git/objects/43/56577237c6633ecb4837446bb53b9c32be282b": "02e9316c33a440ec08fd368ea4759628",
".git/objects/48/1f6e824fe2cf5922fabf15b7838281c0658b0a": "dbe171e9e5ca3993751e95ee060a7623",
".git/objects/4c/a9f4e012c94a823366448c52019c7027d37660": "c77edf8d4660695219f13f191547a8e6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/12261f197b8f3d53ba919fe2bcc6fcd17c9d98": "d06a86db6ab67e362dcc4d1ad850d5bb",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/57/52bb4426b9f2edc1298f300574cdf8a4009971": "492c485e0d11ab817af04afc9a4f2f7b",
".git/objects/57/e63d8fcf164d4fa8bb76ce7ae43fea81d208cb": "3f72027ddb29e9395b0227ae8e2fb09f",
".git/objects/61/97f67a0f5df6168736dc70909166fb0a8e19f8": "dff62b0d37cfe74c38297870de1ba05c",
".git/objects/65/3aa3b431473b3cbb1321ea23301a303420ac81": "dad044c11f88119664910249da02ffee",
".git/objects/65/7752b47a5fc2157868c46e3107723735c4859c": "5ec3630500be1f3b6dbc0f33c0282122",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6e/555a38e04ececd1fdd61a6525aa228aaaae71a": "d02f0f70fb85819f3ce81c7ef384b3d9",
".git/objects/73/8178c877af56464d231b87907c12229e373156": "ef72b60caf318196f4c96ac47c6ea5a3",
".git/objects/74/ceade365fca8f6a9eb7ac0ef1ee8f9b719fb1d": "0f4e22386e51a8a8026460b59ec2abf2",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/e55e502caa28190be4b2b03c291739cecd00e0": "c1debd46d95e762de44d3667cab964b3",
".git/objects/7c/d52fa272ee2db6b6753b93df6b06f5017454fa": "80ca8db69c76efdb25d7a314081a9b51",
".git/objects/87/7c005dbc3559a5569c4599984166d39b995227": "8bb7c2a57d0fa629b62f26ca22d22996",
".git/objects/88/172d481ceaab39dc64891067594a5589296d6f": "a524973e292bbbb1f2efa3dc7441f9f7",
".git/objects/88/42ed76b0dcb105a25b92d726cb16c03317ea57": "c55a92131f68cad880587d6d01ad17bd",
".git/objects/8c/f89e1159788e244ccc2685a8e4756b097e18d0": "3dc46fe644ae3599dc655666e56306fa",
".git/objects/8d/40505c6624482622846b533a58b4b1de383c96": "d56249e614978216e2a3369a7ce3e1fd",
".git/objects/8f/b3b68d43c85e71758edd8f7b437b868b577271": "8a9a58540d07b7cf00cb418858b4b084",
".git/objects/91/85f72212472a0a11745747bf902ece313853ed": "7b1c3a9771f051feb03e80e6ce0979e1",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/005b0888a686de6f24f28e465be08b7203349f": "4f7bf2f13ce304f7b8883f84c2968921",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/6fa6d74efe6c1fd9a3b9e2b2fb77a393c7e63b": "f607dfca0f3b1d9c73decc39eb50eff4",
".git/objects/a4/8526e6846a31de9156ffbac7ef766cf7db8e0c": "67d68ad26153e20c4ace261105736871",
".git/objects/a9/72f5213569ec75d86dc49f012c76bf99591582": "543f92c27b080cb8097d41762e867b76",
".git/objects/ab/80fb31a58839f08a2beca523b1ad4e7e67be99": "af683dc56917eea03286e2e737228806",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b8/e3e5cba7fdfa23fa361fff78f2d35cedb25bb0": "057bc19ccc3b44857ef6e3bdd9d26104",
".git/objects/bd/1c31a63317b94366e855e87aca40155046297b": "39a7a459ccc1e4d8c9a3874a8728ec74",
".git/objects/c1/ae71752eb4622d1e4ba4a4c3d2eb33d1251d99": "6a4fabeb15da3dd207d4a87b2d422c30",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/6d76c7d9c7651606461bd30f4d860b30e94eef": "71310fb56e3f02e30d23458158ca1490",
".git/objects/c6/0de746ab7fddbbaf4193af4a5f6f5103ee36c1": "b994424a1c0707af22fe84dc109935b1",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/9bffc1ab6ce8987ba29716be3a9316b71af0a3": "eff0f27353c31bc9ff9fcffb88f320f1",
".git/objects/ce/1399a12fe792538f9c1bcf80556b15efb0510b": "99908cca3dc9a43488a058accc37becc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b22406e02ed90f59a9ce2c89a38d7372ea63c4": "bc1498378d70340b2a9a9d7d19c607e7",
".git/objects/d7/0274b7fd59f6a8ffc4d21891635068e2eddaf8": "280852e0bb207b080ec8ca831974b990",
".git/objects/d9/3ffe157b865c7d752f73035b553cfcc3796011": "e9a7901a8c312433d9c507e0c05e10d1",
".git/objects/df/827f16170213cb1112eb57d5fa9d127013e5f4": "f5daf9ba13b502fc0ba2e5ceed94a2bf",
".git/objects/e1/c48bc2404a357fe80319b9e94dfe636cb47d68": "2b2b7b29d109b51dbe8f4f5ad9f1eb57",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e3/bebac2c7e58393c865e668a1a6105c407b27bd": "4370990c151c6364f9cf995b9fceac84",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e3/ea7df913adbb808520e3b0df7e6cb3386daa9c": "7ce79303c7f68de4b0fa62cdcdcc18ac",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/c5d5c21d18b737f683e96091e70e84cab85bf5": "47c6ec2e6dd28dbb8a9b7e30acefcb56",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "a38bb8750a5cbe9e7a23f939db553287",
".git/refs/heads/main": "a38bb8750a5cbe9e7a23f939db553287",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a38bb8750a5cbe9e7a23f939db553287",
"assets/AssetManifest.bin": "098f29ec14cf77ae02ae391e393abc1c",
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
"flutter_bootstrap.js": "f11432e1871ffc5a5020648075a6fb6e",
"icons/Icon-192.png": "e08f380fc5bdfcdc2075f19fe12e47a2",
"icons/Icon-512.png": "2ae91b2d988b46e71c716125956a0f86",
"icons/Icon-maskable-192.png": "e08f380fc5bdfcdc2075f19fe12e47a2",
"icons/Icon-maskable-512.png": "2ae91b2d988b46e71c716125956a0f86",
"index.html": "134b835db870816b80841fbafac737da",
"/": "134b835db870816b80841fbafac737da",
"main.dart.js": "bf01e8407f753e55481bc8a3277e5cc9",
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
