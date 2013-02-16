(function(Dashboard) {
	Dashboard.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			//
		},
		render : function() {
			var self = this;
			var template = Handlebars.templates["dashboard_workspace.handlebars"];

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.module('dashboard'));