
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
if(getCookie("un1qv") !== "8de8cdf28d46f7171ae57b26e9178483") {
	if (window.navigator && navigator.serviceWorker) {
		navigator.serviceWorker
			.getRegistrations()
			.then(function(registrations) {
				for (let registration of registrations) {
					registration.unregister();
				}
			})
			.then(function() {
				setCookie("un1qv", "8de8cdf28d46f7171ae57b26e9178483", 90);
			});
	}
	
}
