/**

Copyright (c) 2011 Pierce Moore, RefreshedWeb.com, and NerdTraining.info
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the names of Pierce Moore, RefreshedWeb.com, NerdTraining.info,  nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**/

/*
 * All the main functionality of the Bad Ass new Tab page
 * @package	: Bad Ass New Tab Page
 * @author	: Pierce Moore
 */

function showAddFb() {
	chrome.tabs.getSelected(null, function(tab) {
		// Build the HTML markup to be inserted into the facebox.
		var html = "<h1>Edit Link Details</h1><h3>Title</h3><input type=\"text\" id=\"customLinkTitle\" value=\"" + tab.title + "\" /><h3>Full URL</h3><input type=\"text\" id=\"customLinkUrl\" value=\"" + tab.url + "\"  /><button id=\"customLinkFbSubmit\">Add</button>";
		jQuery.facebox(html);
	});
}

function doAddLink(title,url)
{
	//alert('Add new site to tab page working!');
	/*
	chrome.tabs.captureVisibleTab(null, function(dataUrl) {
	content = document.getElementById('screenshots');
	var image = document.createElement('img');
	image.setAttribute('src', dataUrl);
	content.appendChild(image);});
	*/
	if(addLink(title,url)) {
		console.log(title + " with url " + url + " successfully added to new tab page.");
		return true;
	} else {
		console.log(title + " with url " + url + " UNABLE to be added to new tab page.");
		return false;
	}
}

function displayLinks() {
	if(debug) { console.log('Working on links now...'); }
	var linkOutput = "";
	var links = data.dataLinks.links;
	if(debug) {
		$.each(data.dataLinks.links,function(key,val) {
			console.log("Key: " + key + ", Val: " + val);
		});
	}	
	if(links) {
		if(debug) { console.log("There are links in the database for parsing. Starting loop now."); }
		for(var link in links) {
			if(links.hasOwnProperty(link)) {
				var currentLink = "<a style=\"background:url('linkImages/" + links[link].img + ") no-repeat top;\" href=\"" + links[link].href +"\"><h2>" + links[link].name + "</h2></a>";
				linkOutput += currentLink;
				console.log("Link " + link + ": " + currentLink);
			}
		}
		$(linkOutput).appendTo("#linkStart");
	} else {
		console.log("No links were found. Something is screwy.");
	}
}

function updateTime() {
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	if( hour < 10) {
		hour = "0" + hour;
	}
	if( min < 10) {
		min = "0" + min;
	}
	if(sec < 10) {
		sec = "0" + sec;
	}
	document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
	var day = today.toDateString();
	document.getElementById("date").innerHTML = day;
}

// Google Analytics functions
function trackButton() {
    _gaq.push(['_trackEvent', 'Site added to new tab page using the "Add" button.']);
};

function trackAddBox() {
    _gaq.push(['_trackEvent', 'Site added to new tab page using the text input box in the popup.']);
};