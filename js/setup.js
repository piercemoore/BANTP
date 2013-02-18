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

function bantpLog( type, a,b,c,d,e,f,g) {
	a = a || "";
	b = b || "";
	c = c || "";
	d = d || "";
	e = e || "";
	f = f || "";
	g = g || "";	
	if( type == "log" ) {
		console.log("BANTP Log: ", a,b,c,d,e,f,g );
	} else if( type == "warn" ) {
		console.warn("BANTP Warning: ", a,b,c,d,e,f,g );
	} else if( type == "error" ) {
		console.error("BANTP Error: ", a,b,c,d,e,f,g );
	}
}
function log(a,b,c,d,e,f,g) {
	bantpLog("log", a,b,c,d,e,f,g);
}

function warn(a,b,c,d,e,f,g) {
	bantpLog("warn", a,b,c,d,e,f,g);
}

function error(a,b,c,d,e,f,g) {
	bantpLog("error", a,b,c,d,e,f,g);
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