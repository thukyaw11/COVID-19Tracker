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

self.addEventListener("activate", function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames
					.filter(function(cacheName) {
						if (!getCookie("${hash}")) {
							return true;
						}
					})
					.map(function(cacheName) {
						return caches.delete(cacheName);
					})
					.then(function() {
						setCookie("${hash}", 1, 90)
					})
			);
		})
	);
});
`;

fs.appendFileSync(
	path.join(__dirname, "./../../dist/service-worker.js"),
	template
);
