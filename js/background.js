chrome.tabs.onCreated.addListener(function(tab) {
	console.log("Tab Created", tab);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log("Tab changed: #" + tabId, changeInfo, tab );
});

chrome.storage.sync.get(null, function(items) {
	console.log("All items in synced storage", items );
});

chrome.storage.sync.set({name : "Pierce Moore", _config : _config }, function() {
	console.log("Set name to Pierce Moore");
});

chrome.storage.sync.get("name", function(items) {
	console.log("Name in synced storage", items );
});

chrome.storage.sync.get(null, function(items) {
	console.log("All items in synced storage", items );
});

chrome.storage.sync.getBytesInUse(null, function(bytes) {
	console.log("Total bytes in use:" + bytes + " bytes");
});

var d = new Date();

console.log(d.toUTCString());