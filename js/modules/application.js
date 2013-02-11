/**
 * This is the Backbone Module that will be included in the new tab page
 */
function log( msg ) {
	console.log("BANTP Log: ", msg );
}
function warn( msg ) {
	console.warn("BANTP Warning: ", msg );
}
function error( msg ) {
	console.error("BANTP ERROR: ", msg );
}

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