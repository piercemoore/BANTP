{{#if name}}{
	"name":	"{{name}}",
	"description": "{{description}}",
	"homepage_url" : "{{homepage}}",
	"version": "{{version}}",
	"manifest_version" : "{{chrome.manifest_version}}",
	"incognito" : "{{chrome.incognito}}",
	"offline_enabled" : true,
	"content_security_policy": "script-src 'self' https://ssl.google-analytics.com https://d2wy8f7a9ursnm.cloudfront.net; object-src 'self'",
	"icons": {
		"16": "{{chrome.paths.app_images}}/icon_16.png",
		"48": "{{chrome.paths.app_images}}/icon_48.png",
		"128": "{{chrome.paths.app_images}}/icon_128.png"
	},
	"browser_action": {
		"default_icon": "{{chrome.paths.app_images}}/icon_19.png",
		"default_title": "{{name}}",
		"default_popup": "{{chrome.pages.popup}}"
	},
	"web_accessible_resources" : [
		"{{chrome.paths.app_images}}/icon_48.png",
		"{{chrome.paths.app_images}}/icon_16.png"
	],
	"background": {
		"persistent" : true,
		"page" : "{{chrome.pages.background}}"
	},
	"chrome_url_overrides" : {
		"newtab" : "{{chrome.pages.index}}"
	},
	"permissions": [
		{{#each chrome.permissions}}
			"{{this}}",
		{{/each}}
	]
}
{{else}}{
	"error": true
}
{{/if}}