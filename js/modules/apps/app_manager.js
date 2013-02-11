(function(AppManager) {
	AppManager.Workspace = Backbone.View.extend({
		dispatcher : _.clone(Backbone.Events),
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing App Manager View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.app('app_manager'));