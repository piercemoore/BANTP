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
 * Data_db.js, the part of the BANTP package that deals with local storage interaction.
 * @package: Bad Ass New Tab Page
 * @author: Pierce Moore
 */
var test = "This is a test!";

//Throw the tables in the database into a JSON object for easy access.
var dbT = {
	"fi"	:	"BANTP.install",
	"crit"	: 	"BANTP.crit",
	"links"	:	"BANTP.links",
	"prefs"	:	"BANTP.prefs",
	"login"	:	"BANTP.login",
	"urls"	:	"BANTP.urls"
}


var defaultInstallData		= {
	"version"			:	"0.1",
	"defaults"			:	true,
	"authenticated"		:	false,
	"dataEntered"		:	false
};

var defaultPrefs	= {
	"developerMode"		:	false
}

var defaultLinkData = {
	"linkCount":4,
	"links": 
	{ 0:
	    {
	    	"href": "http://www.facebook.com",
	    	"name": "facebook",
	    	"img":	"linkImages/1.png",
	    	"target": "self",
	    	"addedFromIcon": 0,
	    	"addedOn": "02-20-2011 04:14:00",
	    	"linkId": "ascnoiwejalASDJHAksldasdloij12MNEjdo2d90ddojp1"
	    }, 1:
	    {
	    	"href": "http://www.google.com",
	    	"name": "google",
	    	"img":	"linkImages/2.png",
	    	"target": "self",
	    	"addedFromIcon": 1,
	    	"addedOn": "02-20-2011 04:14:00",
	    	"linkId": "ascnoiwejalASDJHAksldasdloij12assedo2d90ddojp1"
	    }, 2:
	    {
	    	"href": "http://www.gmail.com",
	    	"name": "gmail",
	    	"img":	"linkImages/3.png",
	    	"target": "self",
	    	"addedFromIcon": 0,
	    	"addedOn": "02-20-2011 04:14:00",
	    	"linkId": "ascnoiweasdASDJHAksldasdloij12MNEjdo2d90ddojp1"
    	}, 3:
    	{
    		"href": "http://code.google.com/chrome/extensions/docs.html",
	    	"name": "chrome extensions docs",
	    	"img":	"linkImages/3.png",
	    	"target": "self",
	    	"addedFromIcon": 0,
	    	"addedOn": "02-20-2011 04:14:00",
	    	"linkId": "ascnoiweasdASDJHAksldasdloij12MNEjdo2d90ddojp1"
    	}
	}
};

var defaultLoginData = {
	"user"			:	null,
	"pass"			:	null,
	"authenticated"	:	false
}

var defaultCritData = {
	"paidUser"		:	false
}

var defaultUrlData = {
	"updateUrl"		:	"http://bantp.refreshedweb.com/update/"
}

// Now, let's get into some nice, sweet functionality. Do NOT edit below this comment if you do not know what you are doing!
function accessDatabase(table) {
	try {
		var connect = window.localStorage[table];
		if(connect) return true;
	} catch(err) {
		console.log("Table " + table + " unable to be accessed.");
		return false;
	}
}

function buildTables() {
	// Put all of our tables into an array for easy looping.
	var tables = new Array("first_install","db_crit","db_prefs","db_links","db_login","db_urls");
	console.log(tables);
	var count = 0;
	for(var t in tables) {
		console.log('Building table ' + t);
		if(!setupTable(t)) {
			console.log("Unable to build table " + t + ".");
			break;
		} else {
			count++;
			console.log("Table " + t + " built. " + count + " tables built so far.");
		}
	}
	if(count == tables.length) {
		parseDatabase();
	}
}

function setupTable(table) {
	switch(table) {
		case "0":
			var d = JSON.stringify(defaultInstallData);
			console.log(d);
			if(insertData(dbT.fi,d)) { return true; }
			break;
		case "1":
			var d = JSON.stringify(defaultCritData);
			console.log(d);
			if(insertData(dbT.crit,d)) { return true; }
			break;
		case "2":
			var d = JSON.stringify(defaultPrefs);
			console.log(d);
			if(insertData(dbT.prefs,d)) { return true; }
			break;
		case "3":
			var d = JSON.stringify(defaultLinkData);
			console.log(d);
			if(insertData(dbT.links,d)) { return true; }
			break;
		case "4":
			var d = JSON.stringify(defaultLoginData);
			console.log(d);
			if(insertData(dbT.login,d)) { return true; }
			break;
		case "5":
			var d = JSON.stringify(defaultUrlData);
			console.log(d);
			if(insertData(dbT.urls,d)) { return true; }
			break;
		default:
			console.log("Something is amiss.. No cases reported.");
	}
}

function insertData(t,d) {
	try {
		if(window.localStorage[t] = d) {
			return true;
		}
	} catch(err) {
		console.log("Data insertion into table " + t + " failed. Data to be inserted: " + d);
		return false;
	}
}

function checkDatabases() {
	for(var t in tables) {
		try {
			if(!accessDatabase(t)) {
				if(setupTable(t)) {
					return true;
				} else {
					console.log("Unable to setup table " + t + " in local storage. [#1]");
				}
			}
		} catch(err) {
			console.log("Unable to setup table " + t + " in local storage. [#2]");
			return false;
		}
	}
}

function parseDatabase() {
	// Grab everything from the local storage database and parse it
	var data = {
		"dataInstall"	: JSON.parse(window.localStorage[dbT.fi]),
		"dataCrit"		: JSON.parse(window.localStorage[dbT.crit]),
		"dataLinks"		: JSON.parse(window.localStorage[dbT.links]),
		"dataPrefs"		: JSON.parse(window.localStorage[dbT.prefs]),
		"dataLogin"		: JSON.parse(window.localStorage[dbT.login]),
		"dataUrls"		: JSON.parse(window.localStorage[dbT.urls])
	};
	return data;
}

function isFirstInstall() {
	console.log("Checking for first install...");
	console.log(dbT);
	if(!window.localStorage[dbT.fi]) {
		console.log("First install, building tables...");
		if(buildTables()) {
			console.log("Tables built, parsing database...");
			if(parseDatabase()) {
				console.log("Database parsed...");
			} else {
				console.log("There was an unknown failure while attempting to parse the database.");
			}
		}
		return true;
	} else {
		console.log("Not first install.");
		parseDatabase();
		false;
	}
}