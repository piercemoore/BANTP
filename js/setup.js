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

function log() {
	_.each( arguments, function(msg) {
		console.log("BANTP Log: ", msg );
	});
}

function warn(msg) {
	_.each( arguments, function(msg) {
		console.warn("BANTP Warning: ", msg );
	});
}

function error(msg) {
	if( typeof _ == "undefined" )
		return;
	
	_.each( arguments, function(msg) {
		console.error("BANTP ERROR: ", msg );
		return true;
	});
}

function ifSuccessful(successCallback, data) {
	data = data || null;
	if( chrome.runtime.lastError ) {
		error( chrome.runtime.lastError );
	} else {
		successCallback(data);
	}
}

var config = function( slug, callback ) {
	console.group("Fetching Config Item '" + slug + "'");
	//chrome.storage.local.clear();
	try {
		log("Fetching config item: " + typeof slug + " '" + slug + "'");
		chrome.storage.local.get(slug, function(items) {
			if( _.size(items) ) {
				console.log("Found in local storage!", items );
				if( callback )
					callback(items);
			} else {
				console.log("Slug '" + slug + "' not found in local storage, searching.");
				parts = slug.split(":");
				var fullConfig = _config;
				_.each(parts, function(property) {
					if( _.has(fullConfig, property) ) {
						console.log("Property '" + property + "' found in config, digging deeper", fullConfig );
						fullConfig = fullConfig[property];
					} else {
						throw error("Config item not found '" + slug + "', failed at node: '" + property + "'");
					}
				});	
				console.log("Found item for slug '" + slug + "':", fullConfig );
				var toStore = {};
				toStore[slug] = fullConfig;
				chrome.storage.local.set(toStore, function() {
					if(callback)
						callback(fullConfig);
				});
			}
		});

	} catch(err) {
		error(err.stack );
		console.groupEnd();
		return false;
	}
};