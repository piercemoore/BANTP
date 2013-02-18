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
 
/**
 *	Parse a list of all installed applications, extensions, and themes and locally store them in two objects to dramatically increase speed:
 *		1) Quick launch applications (barebones, no themes or extensions)
 *		2) Application management object (full list, with parsed icons)
 *
 *	@function parseInstalledApplications()
 *	@author Pierce Moore
 *	@date 2/18/13
 */
var parseInstalledApplications = function() {
	chrome.management.getAll(function(apps) {
		//log(apps);
		
		var quickLaunchApps = [];
		var allApps = [];
		
		_.each(apps, function(app) {
			var quick = {};
			var appIcon, icon128found;
			
			// First we parse the app icon
			if( !app.icons ) {
				appIcon = chrome.extension.getURL("img/icon_128.png");		
			} else {
				_.each(app.icons, function(icon) {
					if( icon.size == 128 ) {
						appIcon = icon.url;
					}
				});
				
				// If we still have no joy, load the BANTP icon.
				if( appIcon == null )
						appIcon = chrome.extension.getURL("img/icon_128.png");
			}
			
			quick.icon = appIcon;
			app.icon = appIcon; // We are storing the full object for the app management area, so no need to duplicate the object
			
			// Well that was a huge pain in the ass. Let's move on.
			
			// let's do the quick launch bar.
			if( app.enabled && app.isApp ) {
				quick.id = app.id;
				quick.url = app.appLaunchUrl;
				quick.name = app.name;
				// Push them into our arrays to store
				quickLaunchApps.push(quick);
			}
			
			allApps.push(app);
		});
		
		// Now that's done, we store both objects locally
		chrome.storage.local.set({ quickLaunchApps : quickLaunchApps, installedApps : allApps }, function() {
			if( chrome.runtime.lastError )
				error( chrome.runtime.lastError );
			else
				log("Applications parsed and stored locally!");
		});
	});
	
};

/**
 *	Creates the context menu for BANTP upon installation
 *
 *	@function createContextMenu
 *	@author Pierce Moore
 *	@date 2/18/13
 */
var createContextMenu = function() {
	config("contextMenu", function(properties) {
		if( _.size(properties) ) {
			chrome.contextMenus.create( properties, function() {
				ifSuccessful(function() {
					log("Context Menu created", properties );
				}, properties, function(err, data) {
					log("Context menu creation failed!", err, data);
				});
			});	
		}
	});
};

var logStorage = function() {
	chrome.storage.local.get(function(localData) {
		log("All local BANTP data:", localData);
	});
	chrome.storage.sync.get(function(syncData) {
		log("All synced BANTP data:", syncData);
	});
};

/**
 *	Pulls the default link set from config and stores them properly using the link management system
 *
 *	@function installDefaultLinks
 *	@author Pierce Moore
 *	@date 2/18/13
 */
var installDefaultLinks = function() {
	config("links:default", function(links) {
		_.each(links, function(link) {
			//
		});
	});
};

var processInstall = function() {
	log("Processing install of BANTP");
	// Store the configuration locally
	chrome.storage.local.set(_config, function() {
		ifSuccessful(function() {
			log("Config stored locally");
			createContextMenu();
			parseInstalledApplications();
			installDefaultLinks();
			
		}, _config, function(err, data) {
			error(err, data);
		});
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