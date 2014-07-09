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

var buddha = _.clone(Backbone.Events);

/*
 *	This is where we get all the awesome Handlebars-ness going
 * 	@Pierce Moore, 2/18/13
 */
Handlebars.registerHelper('log', function(obj) {
	log("Handlebars object: ", obj);
});