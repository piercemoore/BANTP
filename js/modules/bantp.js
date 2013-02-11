(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		// NO $el for global application!
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Bad Ass New Tab Page!");

			// Instantiate only the necessary dashboard module
			var Dashboard = loader.module('dashboard');
			this.Dashboard = new Dashboard.Workspace();
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.Dashboard.render();
	
			return this;
		}
	});
	
	
})(loader.module('bantp'));