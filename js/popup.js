$(function() {
	chrome.tabs.getSelected(null, function(tab) {
		$("#link_title").val( tab.title );
		$("#link_url").val( tab.url );
	});
});