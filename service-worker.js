if(!self.define){let i,o={};const e=(e,n)=>(e=new URL(e+".js",n).href,o[e]||new Promise((o=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=o,document.head.appendChild(i)}else i=e,importScripts(e),o()})).then((()=>{let i=o[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(n,c)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(o[s])return;let a={};const f=i=>e(i,s),r={module:{uri:s},exports:a,require:f};o[s]=Promise.all(n.map((i=>r[i]||f(i)))).then((i=>(c(...i),a)))}}define(["./workbox-32827819"],(function(i){"use strict";self.skipWaiting(),i.precacheAndRoute([{url:"/xensiv-config-tool/404.html",revision:"cc063315d0d4dec752bdb98e2274c07a"},{url:"/xensiv-config-tool/css/app.14d81b3b.css",revision:null},{url:"/xensiv-config-tool/css/chunk-vendors.20f02b7c.css",revision:null},{url:"/xensiv-config-tool/firmware/MotionAngle.hex",revision:"b66a062968fd1e8b986e4e8835accbbb"},{url:"/xensiv-config-tool/firmware/Presence.hex",revision:"e327eac3854acfa8465560a22bc31ecc"},{url:"/xensiv-config-tool/fonts/materialdesignicons-webfont.66e43f0f.woff2",revision:"66e43f0fe32824d589f7ab86d3603a53"},{url:"/xensiv-config-tool/fonts/materialdesignicons-webfont.9c4a470c.eot",revision:"9c4a470ce229d8a418b39709d3347fb3"},{url:"/xensiv-config-tool/fonts/materialdesignicons-webfont.c2df65ff.woff",revision:"c2df65ff2e133f739f847239c72de9ce"},{url:"/xensiv-config-tool/fonts/materialdesignicons-webfont.e9f2f143.ttf",revision:"e9f2f143310604845f8aa26c42ad5f55"},{url:"/xensiv-config-tool/img/dashboard/csk.png",revision:"ac5840eaa77ead531a4857b78becea34"},{url:"/xensiv-config-tool/img/dashboard/csk_hw.png",revision:"09f250be57f21f84f084b90d7a56c555"},{url:"/xensiv-config-tool/img/dashboard/getting_started.png",revision:"86268bfc2e640819e7ea5aa7a5f000f6"},{url:"/xensiv-config-tool/img/dashboard/mtb_logo.png",revision:"55515c1883df9de7972b962a320c8abe"},{url:"/xensiv-config-tool/img/dashboard/pasco2.png",revision:"36a3e879dff15bdcafc116dea894abc7"},{url:"/xensiv-config-tool/img/dashboard/python.png",revision:"af20f71b4010fbf0b70507d843ad5c6b"},{url:"/xensiv-config-tool/img/dashboard/radar.png",revision:"86268bfc2e640819e7ea5aa7a5f000f6"},{url:"/xensiv-config-tool/img/dashboard/tr13c.png",revision:"a7d77f2e8723e2f4dc66016162535f54"},{url:"/xensiv-config-tool/img/icons/android-chrome-192x192.png",revision:"227fd2aaa0217064190c35c7a9a54e9d"},{url:"/xensiv-config-tool/img/icons/android-chrome-512x512.png",revision:"c18ce962bbebac31f23547b09c20280f"},{url:"/xensiv-config-tool/img/icons/android-chrome-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"/xensiv-config-tool/img/icons/android-chrome-maskable-192x192.png",revision:"027ca2ee06abdb15a307756f7e67171f"},{url:"/xensiv-config-tool/img/icons/android-chrome-maskable-512x512.png",revision:"a1b91298d9e160fb45af5822447f30f9"},{url:"/xensiv-config-tool/img/icons/android-chrome-maskable-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-120x120.png",revision:"17954929c87e4e9a4fb9dc2bd4a05134"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-152x152.png",revision:"1a7aa476b827cc7a974a5c8b3b161df7"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-180x180.png",revision:"5d6e7114490a1bd718b17cfb0aed4698"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-60x60.png",revision:"11d89cca866d6678c8749ed0becf3441"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-76x76.png",revision:"a41c838b5061731acb52b78bb01bf215"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"/xensiv-config-tool/img/icons/apple-touch-icon.png",revision:"1d7990385a971ad0ed86c924a588cb99"},{url:"/xensiv-config-tool/img/icons/favicon-16x16.png",revision:"e3e6ea1e5ef0529a8dd5120b02e95dc0"},{url:"/xensiv-config-tool/img/icons/favicon-32x32.png",revision:"f7e81b2794873246b8d44053c31207f2"},{url:"/xensiv-config-tool/img/icons/favicon.ico",revision:"02eb29cb9811585b75fc0bccd328711d"},{url:"/xensiv-config-tool/img/icons/logo.png",revision:"a7bc5e05eeb8e980b54e528185330351"},{url:"/xensiv-config-tool/img/icons/logo_square.png",revision:"e193afbf897654db5d50b9b6c785d5c1"},{url:"/xensiv-config-tool/img/icons/msapplication-icon-144x144.png",revision:"ecf525d7f65c36b6e49684ac5b8a8faa"},{url:"/xensiv-config-tool/img/icons/mstile-150x150.png",revision:"a4e93227aadca917f4edbd629eb1ba54"},{url:"/xensiv-config-tool/img/icons/safari-pinned-tab.svg",revision:"99aaa7bcf356686462fc41fbcea3a2db"},{url:"/xensiv-config-tool/img/screenshots/homepage.png",revision:"1ef37994f16ad06c2a0a66c79763ae5d"},{url:"/xensiv-config-tool/img/usecases/gesture.png",revision:"0d1a20c886f94d69b373b3877838ff2c"},{url:"/xensiv-config-tool/img/usecases/motion&angle.png",revision:"d42a0a2dae1a32d4973eecfae69776cb"},{url:"/xensiv-config-tool/img/usecases/presence.png",revision:"32599440169a7b22a415606a5aa6acc1"},{url:"/xensiv-config-tool/img/usecases/segmentation.png",revision:"0d4bf2f01336acb1a9d69bd16c96d79e"},{url:"/xensiv-config-tool/index.html",revision:"185ae1095502fb91eb702ccdaebafbf1"},{url:"/xensiv-config-tool/js/app.00ee24f3.js",revision:null},{url:"/xensiv-config-tool/js/chunk-vendors.eb6df42e.js",revision:null},{url:"/xensiv-config-tool/manifest.json",revision:"4ed2a7ce3d0156b6179dcb020f0b3a06"},{url:"/xensiv-config-tool/manuals/CSK_Manual.pdf",revision:"6275c3aba466195179336727bcfeeb27"},{url:"/xensiv-config-tool/manuals/License.pdf",revision:"559a717c75b63ea75f64754bccb59ed0"},{url:"/xensiv-config-tool/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{}),i.registerRoute(/./,new i.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
