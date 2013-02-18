/**
 * The BANTP Config and function file!
 *
 * @author Pierce Moore
 * @package BANTP
 * @subpackage Config
 */
var _config = {
	defaults : {
		useSync : true,
		startModule : "bantp_m1"
	},
	contextMenu : {
		title : "Add to New Tab Page",
		contexts : ["page"]
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
	],
	links : {
		default : [
			{
				name : "Facebook",
				url : "https://www.facebook.com"
			},
			{
				name : "Twitter",
				url : "https://www.twitter.com"
			},
			{
				name : "Gmail",
				url : "https://mail.google.com"
			}
		],
		developer : [
			{
				name : "GitHub",
				url : "https://www.github.com"
			},
			{
				name : "StackOverflow",
				url : "http://www.stackoverflow.com"
			}
		],
		social : [
			{
				name : "MySpace",
				url : "http://www.myspace.com"
			},
			{
				name : "Reddit",
				url : "https://www.reddit.com"
			}
		]
	}
};