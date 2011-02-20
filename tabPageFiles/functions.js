/*
 * All the main functionality of the Bad Ass new Tab page
 * @package	: Bad Ass New Tab Page
 * @author	: Pierce Moore
 */

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