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
				log("Evaluating success of context menu creation using properties: ", properties );
				ifSuccessful(function() {
					log("Context Menu created", properties );
				}, properties, function(err, data) {
					log("Context menu creation failed!", err, data);
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