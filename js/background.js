/**
 * 
 * Background page for BANTP. This is where the magic happens.
 *
 * @author Pierce Moore
 * @package BANTP
 * @subpackage Background Page
 */
/**
 * First, let's do the super high level stuff: Install/Update events.
 */
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

var processInstall = function() {
	log("Processing install of BANTP");
	// Store the configuration locally
	chrome.storage.local.set(_config, function() {
		ifSuccessful(function() {
			log("Config stored locally");
		});
	});

	// Create our context menu
	config("contextMenu", function(properties) {
		if( _.size(properties) ) {
			chrome.contextMenus.create( properties, function() {
				ifSuccessful(function() {
					log("Context Menu created");
				});
			});	
		}
	});
};

var processUpdate = function() {
	//
}

var processChromeUpdate = function() {
	//
}

chrome.runtime.onInstalled.addListener(function(details) {
	switch(details.reason) {
		case "install":
			processInstall();
			break;
		case "update":
			var oldVersion = details.previousVersion;
			processUpdate();
			break;
		case "chrome_update":
			processChromeUpdate();
			break;
		default:
			break;
	}
});

/**
 * Now let's handle all the start/stop/suspend events.
 */
chrome.runtime.onStartup.addListener(function() {
	//
});

chrome.runtime.onSuspend.addListener(function() {
	//
});

chrome.runtime.onSuspendCanceled.addListener(function() {
	//
});

config("contextMenu", function(data) {
	log("Config of contextMenu", data );
});