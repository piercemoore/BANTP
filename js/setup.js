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

function ifSuccessful(successCallback, data, failureCallback ) {
	data = data || null;
	if( chrome.runtime.lastError ) {
		error( chrome.runtime.lastError );
		if( failureCallback )
			failureCallback( chrome.runtime.lastError, data );
	} else {
		successCallback(data);
	}
}

var config = function( slug, callback ) {
	//chrome.storage.local.clear();
	try {
		chrome.storage.local.get(slug, function(items) {
			if( _.size(items) ) {
				console.log("Found in local storage!", items );
				if( callback )
					callback(items);
			} else {
				parts = slug.split(":");
				var fullConfig = _config;
				_.each(parts, function(property) {
					if( _.has(fullConfig, property) ) {
						fullConfig = fullConfig[property];
					} else {
						throw error("Config item not found '" + slug + "', failed at node: '" + property + "'");
					}
				});	
				console.log("Found item for slug '" + slug + "':", fullConfig );
				var toStore = {};
				toStore[slug] = fullConfig;
				chrome.storage.local.set(toStore, function() {
					if(callback)	{
						callback(fullConfig);						
					}
				});
			}
		});

	} catch(err) {
		error(err.stack );
		return false;
	}
};