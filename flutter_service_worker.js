'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a5a8050964c2b8f674e2d733cbdf0e57",
"version.json": "48fc4080ab1b7184133b96a0f0174ac0",
"index.html": "67c035bfaffdd4e540e47ba287119b12",
"/": "67c035bfaffdd4e540e47ba287119b12",
"main.dart.js": "5c03130730de33566569e1c368d4cfca",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e086e337cdb843667e686ae03e1c8315",
".git/config": "cbd09863b067c43832e12eb073367612",
".git/objects/66/24d424af390a4d60e1115bb6f1c2adcbf14c99": "bebf663d31f8c50630908803dee86d74",
".git/objects/50/e2596d37375caf9788246e1cf32ac5f7986b04": "a703a3083491ece7f4a2f0b5de0cfa80",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "ce2279bcb338ce6bc80c3a34a9a21858",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "88c940dabac72bf4ab29b7961c5342fa",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "0cba413eb6d0f6f1a8540a0d30d1ba1e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/20/41e2bf88860ee372ed38f3fef74f754208c108": "2166f4c2194e54c2a52dcd42ac102c3d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/c0f4b2b7509658f183c38ee9b83c7715e1a162": "4ceef82f42b3d0594862b95e6ef0ffec",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/17/3850ac4bab86d26826031aeab68a155d829597": "3afadd91a90ffb2d73564e89d2a00ec3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "7dfa8e6b19c72e48de6be3e1b0bf42cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/1b/f847e59e35e7e9fed65391be753e9d1e00d1ad": "c3298aa796fb3a3237e8984fe2731bdc",
".git/objects/24/ce43524896c2072e5aaf0583e48c8bc04c5057": "94380413bc9526aa3f48b98552243e41",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "33eac2a5f77e384ddf223119d29f133e",
".git/objects/1d/375bffbe823f94b513120ebc245981e3435e3a": "2cf5accab7056dfc4c0a19f963e328a2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e611f40e93b8ac5783326a52ce2c441",
".git/logs/refs/heads/main": "8e8815984ee3063a6dd6f01f465c1a59",
".git/logs/refs/remotes/origin/main": "3549c991ab9478075892454401611c45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d9a1c820ceb21f2c7116f7d7692fd3c1",
".git/refs/remotes/origin/main": "d9a1c820ceb21f2c7116f7d7692fd3c1",
".git/index": "d568fb9e531263bc490b9c3526fbf4fa",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
