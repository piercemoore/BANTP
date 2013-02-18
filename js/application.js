/**
 * This is the Backbone Module that will be included in the new tab page
 */

var loader = {
	module : function() {
		var modules = {};
		return function(name) {
			if( modules[name] ) {
				return modules[name];
			}
			return modules[name] = {};
		}
	}(),
	app : function() {
		var apps = {};
		return function(app) {
			if( apps[app] ) {
				return apps[app];
			}
			return apps[app] = {};
		}
	}()
};

log("Searching for config value 'app:name'");
config("contextMenu", function( property ) {
		log( property );
});

var buddha = _.clone(Backbone.Events);