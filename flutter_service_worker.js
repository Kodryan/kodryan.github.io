'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "38e7d71834923c3ec95c6dfaec3cf652",
".git/config": "516eb078b5ad96f191c9131dbc0554ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "96a44df7661b9dfc2e56d0d88303b1f3",
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
".git/index": "bef57ad07b968056ffbb092b9cd2c331",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3fecb2ac3f4282a28f085005c74fcad6",
".git/logs/refs/heads/main": "3fecb2ac3f4282a28f085005c74fcad6",
".git/logs/refs/remotes/origin/main": "39bb36d2bf1c1c7260c59689513b6f10",
".git/objects/00/4cd1b9e56cf7cc6e3f1ed0d877f60e7c5028b6": "1e6e38a86b1dffaaa981cda529a3e04f",
".git/objects/03/5bdf403edbcce4cdc25dbf2ebb057eb09ee21c": "11966d675867b022b183042e2ef73bbb",
".git/objects/03/7a1366fce84ec4c58db4b6db396c29ae2c9173": "ab819fe7bc59bd2251da14afc12a8356",
".git/objects/04/ce5090e7c210d5cbec51be36c787ef89979415": "c8b1fb5f95ee82fca29575817c92c45d",
".git/objects/05/3f2363ba6647582e27f6d1287454490e6b927e": "bff7491b22156cc94285dfd3c3498b69",
".git/objects/06/35f3811674114dcb34ea139aac2408975a6ab3": "2967da017de9ab2edbd071c5f2515f8e",
".git/objects/12/a6e9ffcea874c8bf5647caad38aa47be2cbfd0": "393a80c490ba7194976aac98cd3cdd22",
".git/objects/12/aa1f714f3273f7d4e36e6ece5a8f5440a23c99": "59aae4b6917bf3e4d27b75739c6a7326",
".git/objects/14/a3fb37530e6542771f695bca42650f1f4721ce": "2e508f4f95ffbac382a9fb2d5be6814f",
".git/objects/14/d0b086c0f86e58be123106e30012613305442e": "6aa44f7e20404d9b52d5a11e672a5aef",
".git/objects/17/61874554936998733c0958d2d2366fbe3b594c": "adbedac05c7e579f79a848c83bcc515d",
".git/objects/18/9c8269ac21d85bd0a02659d68131d7baf687ed": "d514a95cc01144a0fb923b62944be494",
".git/objects/1d/c05e63b2501a218bec42f4a5b4db141fbd9c8c": "dfb5b3124b728f029c4ffe8d17e8c02a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/74c47eda7dfb9cdc9ac22cf8d40293ac5e5751": "5dab949aca9a3be36462e798f8f6b8da",
".git/objects/22/266a96fd94a93958816b29fb35451712fb59e3": "87574c50e1ddd955b6689a1d035a34cc",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/24/976ad679794c488723097c91a1ac4ce7e2e551": "8f74a6fd6629ae5cf7535a7aad2e18c5",
".git/objects/2b/9ad1e214e3d25212abdcfade86d175c0257bba": "28c1d3383bc4bf4e7ff709fe3a3f83ef",
".git/objects/2c/1448df45b3f4b87e95616f19c07f6173aa135a": "e66bfc91840339c0b0abb552d3d5ab40",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/9fa8afe082e5fff1e0893f29fcea7719d5dc6b": "c5a5db6ac2c2c074a4114dd9855c4039",
".git/objects/3d/1b38160e8e037643118154e2c616db780b4436": "fafadfe4d2909879cfeef0bb557cf22d",
".git/objects/3d/f955854a010cf12be38dcccdf1ad6188ece27f": "2e621de3c83437333550248def916b70",
".git/objects/3f/3b0a5aca8675b15f291ad3fac1729875e4e002": "8d2fbc16031fcd5364bf0aeffdf4d108",
".git/objects/3f/de023c4b593d109d3ca748349202a04b8f0d6c": "fa1091879836d423be6761ca58f1c44b",
".git/objects/40/8a3c539adc93fb12f17244adbb754a52334283": "f86464974621d75db3827a636a9edb2a",
".git/objects/43/f3e663ad159d301f11d1b3ee62c033de7ea2c8": "b7b2e83b76b0e21493b1b46c268e2c21",
".git/objects/44/854be92c3de7fdda5b5fbc98b263ce52928f62": "6ae8f13f26f6458b45314988d0ef8c83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ad4ef8c842e4bc733dadd3f33fb43d2aaf2bf9": "c35e7153642f9dee75b781e7a7fdf1b0",
".git/objects/49/f75c4b5e038ae0270f855c2e6976d74564cb39": "f749dabaa06fb63695d6b7a2038742d0",
".git/objects/4b/8cd16ad7837c803e37e3abff6add6c3f235ba0": "24dced713b16fe6622ded800436c40a7",
".git/objects/4e/28208aaabd9a1da6968303f020886bf6b15f4b": "6641c3ce26b03072648510fc57222d41",
".git/objects/51/ddcf3e34e5b6ae53143914e0465e6d72d5bc45": "2b770bbbcae5a2ccd6b3443bb70478b9",
".git/objects/54/a1819225d5a8011dbe9f15e03fb1ee7505d7dc": "6323cb5f4eae5eb2c5f4f7d29c191c08",
".git/objects/5d/eb23f1300acc4e060d5d6ebdb3cf26a59f3616": "3c2b9e3abe58a1a4b5c840da7cd3b6a5",
".git/objects/64/9ab28774fa9e5c7a33d07926b82e9af288d346": "7b96f72808c39acc1a84a8caa30e29d7",
".git/objects/65/1afbdc062cc2a48443f930a28345b908c6f74a": "d184d65123ed8aeb67c4634562a29de5",
".git/objects/65/de2605fcaf8b0acb1f4fa5a26c0ef89f96b486": "e46503bc1f52f8717d7c6e837e6e1f0d",
".git/objects/65/f57e73eedd4da4dfaa0c1b7bf60d10fc69881e": "e0ad9f6ad3780dbbe9bad00ac430c04d",
".git/objects/6e/b268567747c59d8151941c5ffba6792cec678d": "c03723ef04079e6badc32dd46b8dc530",
".git/objects/70/6c1b4b27bd2293222620f7ad6f47512e660683": "a2d9e914decc126124f82c3b72dfdb73",
".git/objects/70/c1187603195e0811adab94a6147d54a62549bf": "3f1d89ff6190d98deb9f9d34d1c87ab3",
".git/objects/77/e43e350d33a7c3dab975b6ccd2384ad4557875": "dac3d643561abba9617e6f2601871c3b",
".git/objects/78/7cab0dd7a3fa75a746139a14dd6086b44071de": "ad14ed648c1e291f3f2854a860d041b7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0e66276033e3e08585e60d0c9a95dfb165a3bc": "f5c4672ab597ef662ff412a32351a1a1",
".git/objects/7e/46a5f140dd7014a14951b6e8895869062cf211": "3a8d7e3e3c16cab583807b81a65d4d1e",
".git/objects/84/1de6ebb119f43fcb041fe9ea4d69c846b1421a": "3c867307adb33bf1a948a5e0e4eef08c",
".git/objects/88/1af9227fcf3e59c72a1de9ee244932e707aa2a": "6a7495b707cdc35e2a3cb66ef3a73551",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ef3d9d6b1bb3f77dbd9676ac330e7ab86c7abc": "544e96d8b29b7407a4ca153e921b5a4f",
".git/objects/8c/4316c69dd1d7e9f8d803ee32a22b0feb382680": "551400c15d14f3fc9dc3cf20a2fa9c70",
".git/objects/8d/14e96e04f77e12000bdaa79e5d611754b04c1d": "b3844488bc15d5e093d21baf2524f8e9",
".git/objects/8e/21b7dbf28560fd0d1b1e888732adbf44aaa520": "2bd717a4e8faf3dfa68bfc032ff13f2a",
".git/objects/8f/b71e1b8b24d06b5e8e5ab4c95a24f41ad1c147": "0080722cbb4279d32c64c83555bef696",
".git/objects/90/b80224ed09d62551bdf355914cdc1de7f21810": "139dbf30b04523267c295613ad9370e2",
".git/objects/96/ff5cda9715932bbe4bc5b37406c7a61c4f7c3d": "151888d7aa67cdbdd5fd7f2665cde1ca",
".git/objects/98/17b0e0cfb4f40cb67df1937269e76c9e8c14ca": "94dad9501669ab26b0ccc8b15ea600d3",
".git/objects/99/e8919193198a4089f0582b84f745009ccde2e1": "037174f016cae71983e4a416e27c1327",
".git/objects/9a/8d63fb762fc92a5abd8fb7d6e63ecf9269ef61": "fac5fe4dcc748e38a9c4d3942ea2cd8c",
".git/objects/9b/e7ca03f353a95ec99dfa5df1653ad5801c547d": "df15c1c21d77aaffa10722521fe590fb",
".git/objects/9c/b10f611cb095427d4bf8b606ffe7c86825b9d3": "04fceebfaf80aceabd57a80e8d553f59",
".git/objects/9d/07c71f8334c8eeeaee6499d9f3b883d6039ad4": "fa2c28e55b72e7f7b2d6314261945a05",
".git/objects/a0/a3f7d5bc1b43469d6e1633b4108c1881669c7a": "2c530d36e752ad9c9480cd5079ad00f4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/474211370465e23c064bd6280ee595794abb49": "c8673a00b6a9dfd5066b8767f71f37db",
".git/objects/a2/039ab1e870d9f2345e2ec6b5268795192c3d9b": "a24b7afae5dd9b87b478725fa5b7be36",
".git/objects/a3/2515abede233d6ac2bbeb7bea1868bf43ef658": "3a7ce5657195a36914bc12eb706ec862",
".git/objects/a4/98954c0d582bf3647bac3b6fb615ab2cd25d94": "14badf590b660e78a4a7943672603aee",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/e60f28799e38377ddfce8fd124b44cdbf47a58": "bfef6e46af8060407e17274ece701154",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/f9d36c872de72d222645ff23e48319ac1f499e": "7ff9bead313f8642e25f1a2c10d769f0",
".git/objects/af/84b6431145aa044aa80a59ac8d29888ce87773": "751300355873548d9997d59d9eec4d43",
".git/objects/b2/9a7b81d6ce757b2cad013b8a5939f81037158b": "fbf2947a3943241eee17bb607f5bc984",
".git/objects/b2/fa29eceaf82a77474c751b6374b379ddd50df1": "9a12540a6044e4dec5a7a8176850bb72",
".git/objects/b4/b004b29491d73508a06f30d0e1874240365a93": "62e4b79e2a7bb0527137d8ddd1b1558b",
".git/objects/b7/4629ba52643c08bc0968664f87957c8ddb86f7": "20e2c7e8282bcc68c208b86bd82eeeb4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b6585e8944fcbe731f374235e7ad30105050b3": "9a8e32acd5da82c92aa67116e50864da",
".git/objects/b9/d4165778c23cfce39d49a9d7562b544e475685": "3c6886c9171a90f9fe8ddbf4d0e81537",
".git/objects/ba/2ea338eeff9ac5f46058ebebf4639d512ee3df": "0b6adbc2c57768b320b1714871a5c8a1",
".git/objects/ba/3de1dc829598068e4e00eea3f3f0a0660190df": "a4588d9f71d47283f0a8c2a0560c8812",
".git/objects/ba/8482750664c54d750fa5e65af049acafd5c43f": "12052fecf6fe56c13bb88d6a2ea31340",
".git/objects/bd/96951ee71b47401413148a302051551ead26bd": "89e57cdbaf20425dfe3bc0d0ef7d6677",
".git/objects/c2/a494744fa73773319780f846c2a15d2c5e5e16": "be94644a8eb60a72365357631c367dea",
".git/objects/c4/4989c8f2ae7c85aaf89869c4c2463c26b485a8": "8d652bbf1b022bf7ccfaefa284de1f60",
".git/objects/cc/643a6c1a32cb4e1f07554fcb0246edc7b5ba8a": "f125abd168b32c1e2d7b36ea6ce1eba9",
".git/objects/cc/9ac1111d4746402f4a859a958f46f1f253945d": "b5ddbd91e67df871331a9921cc9b6de8",
".git/objects/ce/936d6e83775c8c48c17329de5c36f4a158168c": "084088025cc32b1ecf5145635e3ead56",
".git/objects/d0/263b7d7a229bbe47b6c1c48ba24d7503578aaf": "2d1c492cecc2c4e436f08da4898019d8",
".git/objects/d4/5ef398ef0728efaf9ecd73bedeb4b6e1afd076": "e472b268739f1fe4863dd66d68878045",
".git/objects/d5/7991d9cc3bfa6f32b4d8e73f4269022deac85c": "82869f2d34d9384ab5cc09e220558511",
".git/objects/da/c0f52577f68342a7ba5a5f3976c0a027193308": "828fb8cee1ec30b69c396fb5f7a3b967",
".git/objects/da/caf8cfbabf7427467919a145d8c65df2001283": "aee5bbbfe4937710ec6bf2943c010def",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e1/d0ab567a08cf3e94f63e3be7a3726299eb6256": "f8febbccda3d6dec274b11ac9d92bb90",
".git/objects/e2/1fb3aa80390741e3ac4467d17c3a18e4b40691": "1c94d87fbcc1d9d7bd90cf88f6a7de68",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c4d729303bca3bd377637b3166eca6c59db870": "b3b8e2e03344061f80cb67336474b5ab",
".git/objects/e8/f7e508de61b4f51e17552af89425969e9dd06b": "d9b182b55a38533d07497e3d22bb5a9d",
".git/objects/ea/9f2f1deceb5fef88fa822dda4be2fe5cc635d3": "874bed9c25e1f4718046f445d09b331d",
".git/objects/f0/01482c282de6ee202d1a95b6a1c294b8f34dc4": "518efe7b3e9c5f5412e2069757a49ac4",
".git/objects/f0/7aeeffa76a53c668ff2417f5b5dd09bd1c8ff6": "25289761cf99a84b5a2b36cb8876f664",
".git/objects/f3/d9e50265f20a6e17848ff54d52307e6194dfc0": "f4e839042d4620f816a15ff8883ecc9f",
".git/objects/f8/430771a27f20a4d4c9955c62a1ceceb7084fb0": "49399bef26f8795b5a9294718adea7dd",
".git/objects/ff/2f8731062869dc68f1edf23ea50f602ef9d205": "1c08503bbbf2f66d5db87e165fa74b75",
".git/ORIG_HEAD": "f262bfaab8a4a8dd685ea4c910be4d9d",
".git/refs/heads/main": "f262bfaab8a4a8dd685ea4c910be4d9d",
".git/refs/remotes/origin/main": "f262bfaab8a4a8dd685ea4c910be4d9d",
"assets/AssetManifest.json": "b28ebd38d45d89932e36e4ac3174be8e",
"assets/assets/images/commissioned/1.jpg": "d96bccb5051f2bf81da82f45dc8bf5ad",
"assets/assets/images/commissioned/2.jpg": "e243572d4f2ccbe8075e202be7025360",
"assets/assets/images/commissioned/3.jpg": "bd4e2a992a899b4cc0efb7e766f0ae7d",
"assets/assets/images/commissioned/4.jpg": "31ec3b17c0f8a009bf6a4fff062eb9ed",
"assets/assets/images/commissioned/5.jpg": "3aeb2e31e837c12e56f71d3b1d1eb55c",
"assets/assets/images/commissioned/6.jpg": "36b00b9fa80263d6330e79cee81cf07e",
"assets/assets/images/commissioned/7.jpg": "441c867c4ec5f7a03c60845e33926e6e",
"assets/assets/images/commissioned/8.jpg": "228ece784861aba4af980bbfe7ed95e9",
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
"index.html": "ae52ac8b89c04637e6807bdf6ce4da72",
"/": "ae52ac8b89c04637e6807bdf6ce4da72",
"main.dart.js": "1d87920f46d2f9e053924bb63d0ad46d",
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
