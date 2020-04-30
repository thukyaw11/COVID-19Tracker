const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const hash = crypto
	.createHash("md5")
	.update(
		Math.random()
			.toString(36)
			.substring(2, 15) +
			Math.random()
				.toString(36)
				.substring(2, 15)
	)
	.digest("hex");

let template = `
workbox.core.setCacheNameDetails({ prefix: "d4" });
//Change this value every time before you build
const LATEST_VERSION = "${hash}";
self.addEventListener("activate", (event) => {
	console.log(\`%c \${LATEST_VERSION} \`, "background: #ddd; color: #0000ff");
	if (caches) {
		caches.keys().then((arr) => {
			arr.forEach((key) => {
				if (key.indexOf("d4-precache") < -1) {
					caches
						.delete(key)
						.then(() =>
							console.log(
								\`%c Cleared \${key}\`,
								"background: #333; color: #ff0000"
							)
						);
				} else {
					caches.open(key).then((cache) => {
						cache.match("version").then((res) => {
							if (!res) {
								cache.put(
									"version",
									new Response(LATEST_VERSION, {
										status: 200,
										statusText: LATEST_VERSION,
									})
								);
							} else if (res.statusText !== LATEST_VERSION) {
								caches
									.delete(key)
									.then(() =>
										console.log(
											\`%c Cleared Cache \${LATEST_VERSION}\`,
											"background: #333; color: #ff0000"
										)
									);
							} else
								console.log(
									\`%c Great you have the latest version \${LATEST_VERSION}\`,
									"background: #333; color: #00ff00"
								);
						});
					});
				}
			});
		});
	}
});

workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
`;

fs.writeFileSync(path.join(__dirname, "./../service-worker.js"), template);

let html = `
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

if(getCookie("un1qv") !== "${hash}") {
	if (window.navigator && navigator.serviceWorker) {
		navigator.serviceWorker
			.getRegistrations()
			.then(function(registrations) {
				for (let registration of registrations) {
					registration.unregister();
				}
			})
			.then(function() {
				setCookie("un1qv", "${hash}", 90);
			});
	}
	
}
`;

fs.writeFileSync(path.join(__dirname, "./../../public/sw.js"), html);