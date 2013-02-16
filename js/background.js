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
chrome.runtime.onInstalled.addListener(function(details) {
	switch(details.reason) {
		case "install":
			//
			break;
		case "update":
			var oldVersion = details.previousVersion;
			//
			break;
		case "chrome_update":
			//
			break;
		default:
			//
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

