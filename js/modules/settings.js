(function(Settings) {
	Settings.Workspace = Backbone.View.extend({
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Settings View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.module('settings'));