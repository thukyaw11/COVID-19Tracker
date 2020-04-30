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