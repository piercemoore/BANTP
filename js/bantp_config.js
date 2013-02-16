function log( msg ) {
	console.log("BANTP Log: ", msg );
}
function warn( msg ) {
	console.warn("BANTP Warning: ", msg );
}
function error( msg ) {
	console.error("BANTP ERROR: ", msg );
}

var _config = {
	defaults : {
		useSync : true,
		startModule : "bantp_m1"
	},
	app : {
		name : "Bad Ass New Tab Page",
		url : "https://www.bantp.com",
		api_url : "https://api.bantp.com",
		bug_url : "https://api.bantp.com/bug",
		developer : "Pierce Moore",
		dev_twitter_handle : "@KiaPierce",
		dev_twitter_url : "http://twitter.com/KiaPierce"
	},
	modules : [
		{
			name : "DASHBOARD",
			id : "bantp_m1",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}
		},
		{
			name : "SETTINGS",
			id : "bantp_m2",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}

		},
		{
			name : "BOOKMARKS",
			id : "bantp_m3",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}
		},
		{
			name : "MODULES",
			id : "bantp_m4",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}
		}
	],
	apps : [
		{
			name : "APPLICATION MANAGER",
			id : "bantp_a1",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}
		},
		{
			name : "TO-DO LIST",
			id : "bantp_a2",
			version : "0.1.0",
			updated : "Sat, 16 Feb 2013 13:58:04 GMT",
			config : {
				//
			}
		},
	]
};

var config = function( slug ) {
	console.group("Fetching Config Item '" + slug + "'");
	//chrome.storage.local.clear();
	try {
		log("Fetching config item: " + typeof slug + " '" + slug + "'");
		chrome.storage.local.get(slug, function(items) {
			if( _.size(items) ) {
				console.log("Found in local storage!", items );
				return items;
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
				chrome.storage.local.set(toStore);
			}
		}); 

		return chrome.storage.local.get(function(items) {
			console.log("Full local storage object", items );
			console.groupEnd();
			return items;
		});

	} catch(err) {
		error(err.stack );
		groupEnd();
		return false;
	}
};