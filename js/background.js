chrome.tabs.onCreated.addListener(function(tab) {
	console.log("Tab Created", tab);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log("Tab changed: #" + tabId, changeInfo, tab );
});