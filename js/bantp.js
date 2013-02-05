/**
 * This is the Backbone Module that will be included in the new tab page
 */
function log( msg ) {
	console.log("BANTP Log", msg );
}
function warn( msg ) {
	console.warn("BANTP Warning", msg );
}
function error( msg ) {
	console.error("BANTP ERROR!!", msg );
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
	}()
};

(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		initialize : function() {
			console.log("initializing workspace!");
		}
	});
})(loader.module('bantp'));