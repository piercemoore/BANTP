(function(AppManager) {
	AppManager.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing App Manager View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
			var template = Handlebars.compile( $("#hb_appmanager_workspace").html() );

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.app('app_manager'));