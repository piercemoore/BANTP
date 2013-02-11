(function(Dashboard) {
	Dashboard.Workspace = Backbone.View.extend({
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Dashboard Workspace View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.module('dashboard'));