console.time("Page Build");

Bugsnag.releaseStage = "development";
Bugsnag.metaData = {
	user : {
		name : "Pierce Moore",
		email : "pierce@piercemoore.com"
	}
};

window.onerror = function windowError(msg, url, line) {
	var pathParts = url.split("/");
	pathParts.splice(0,3);
	var path = pathParts.join("/");
	Bugsnag.notify("Uncaught: '" + path + ", line #" + line + " :: " + msg );
	error("Uncaught: '" + url + ", line #" + line + " :: " + msg );
	return true;
};