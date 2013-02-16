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
			var template = Handlebars.templates["settings_workspace.handlebars"];

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.module('settings'));