(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		el : "body",
		events : {
			"click .sidebar a" : "activateModule"
		},
		initialize : function() {
			console.log("Initializing Bad Ass New Tab Page!");
			this.model = new BANTP.WorkspaceData();

			// Instantiate only the necessary dashboard module
			var Dashboard = loader.module('dashboard');
			this.Dashboard = new Dashboard.Workspace();
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.Dashboard.render();
	
			return this;
		},
		activateModule : function(e) {
			e.preventDefault();

			var module = $(e.currentTarget).data('module');

			this.model.set({ currentModule : module });

			log("Module " + module + " activated!");
		}
	});

	BANTP.WorkspaceData = Backbone.Model.extend({
		idAttribute : '_id',
		defaults : {
			currentModule : "dashboard"
		},
		initialize : function() {
			console.log("Initializing BANTP Workspace Data Model");
			// Initialization
			this.on('change', function() {
				log("BANTP Workspace data update", this.toJSON() );
			});
		}
	});
	
	
	
	
})(loader.module('bantp'));