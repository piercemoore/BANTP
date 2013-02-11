(function(Settings) {
	Settings.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing Settings View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			this.$el.html("BANTP Setting rendered!");
	
			return this;
		}
	});
	
	
})(loader.module('settings'));