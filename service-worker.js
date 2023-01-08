/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c25155611c503018da614a7205aa6500"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8ff122cd.css",
    "revision": "dbfda11d4ae97e5c21e0ef2eb72e4ba0"
  },
  {
    "url": "assets/img/delete.b4ddea19.png",
    "revision": "b4ddea19ffb302cf24c9f4912cbf97da"
  },
  {
    "url": "assets/img/get_all.038410f7.png",
    "revision": "038410f7777f75fe44cdf6208edd9782"
  },
  {
    "url": "assets/img/get_one.70e52df1.png",
    "revision": "70e52df1c904ea3d61830bf97acd8eb7"
  },
  {
    "url": "assets/img/post.c496d951.png",
    "revision": "c496d951644649626f29b7c7682b8d81"
  },
  {
    "url": "assets/img/put.9327da49.png",
    "revision": "9327da49a8902e7aee0b578adac84817"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.c2e567df.js",
    "revision": "7c3183bb28914e7eca93f8097e64cdf1"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.cbe181a7.js",
    "revision": "f3987054b5a1a800768f2f2617120e89"
  },
  {
    "url": "assets/js/14.a5fd1066.js",
    "revision": "7d8d52e1d276c4efe0b3315c904f56fd"
  },
  {
    "url": "assets/js/15.c38cc886.js",
    "revision": "66943fc0e940dfbaa08a3fb8f39580ff"
  },
  {
    "url": "assets/js/16.8149d41e.js",
    "revision": "1bd468748fb462fc4f34674c6ca7b657"
  },
  {
    "url": "assets/js/17.763f3ceb.js",
    "revision": "29e942bb9ef961fdb126f4f97eaa5e73"
  },
  {
    "url": "assets/js/18.9ef7b1f1.js",
    "revision": "82e3386069df5329f80708679d262aef"
  },
  {
    "url": "assets/js/19.84264eae.js",
    "revision": "97d47fc22517f12617dd619778f1d228"
  },
  {
    "url": "assets/js/2.c81f6898.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.bf667381.js",
    "revision": "12190780093e36f727919c532ad86ff4"
  },
  {
    "url": "assets/js/21.7bc851e8.js",
    "revision": "8df1b8fa84e921436c6967114858dbc8"
  },
  {
    "url": "assets/js/22.3d63e49c.js",
    "revision": "9a68c17b242b117915894900a669a40c"
  },
  {
    "url": "assets/js/23.053ffc04.js",
    "revision": "f2f70378830ca29dcd119ff3d609fa06"
  },
  {
    "url": "assets/js/24.2f52d1b8.js",
    "revision": "d39111ae1eaedfe90c70cc9c0ad8e271"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.b5e353bb.js",
    "revision": "cfecf2605b180a613a22dfacc2849e24"
  },
  {
    "url": "assets/js/4.857b7abb.js",
    "revision": "58160184324ff3ba4f15067149fcf4c1"
  },
  {
    "url": "assets/js/5.494be6d1.js",
    "revision": "380ea1057a82131278aaa086feeaac57"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.962daa7d.js",
    "revision": "46ad7d5ada3793aa18628a96f89ce767"
  },
  {
    "url": "assets/js/8.171abcd8.js",
    "revision": "6e77d6755a4be3b51d8e4cbe8328b320"
  },
  {
    "url": "assets/js/9.608f0cac.js",
    "revision": "bd7019f9104848e37a7283efbd174418"
  },
  {
    "url": "assets/js/app.5c8a826f.js",
    "revision": "aab54493d20aac6d1d86d0c912c35d18"
  },
  {
    "url": "conclusion/index.html",
    "revision": "acf1625fe3a48924b78a261b4c6b24a1"
  },
  {
    "url": "design/index.html",
    "revision": "a13619d731a5fb63274ff86c9ea90f5f"
  },
  {
    "url": "index.html",
    "revision": "eb79381c0c8093fa8b82a3db8e02735c"
  },
  {
    "url": "intro/index.html",
    "revision": "015d3eb78d0417074d21c1c7722103b7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "11bea5ce5a7f6864a16eef68b6d7b8d4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "73dee761b658c88a8fe6316616905122"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b563e71d95c690df3fad2a0a4411d638"
  },
  {
    "url": "software/index.html",
    "revision": "0ea832d2e7403eea1e3f1ca7f3c22f49"
  },
  {
    "url": "test/index.html",
    "revision": "56e87d68e5c2f859fe16236719246b88"
  },
  {
    "url": "use cases/index.html",
    "revision": "9d53f0b1021898f4b410bf695038f2bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
