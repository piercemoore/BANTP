(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		el : "body",
		events : {
			"click .sidebar a" : "activateModule"
		},
		initialize : function() {
			log("Initializing Bad Ass New Tab Page!");
			this.model = new BANTP.WorkspaceData();
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			// Instantiate only the necessary dashboard module
			var DashboardModule = loader.module('dashboard');
			var Dashboard = new DashboardModule.Workspace();

			Dashboard.render();
	
			return this;
		},
		activateModule : function(e) {
			console.time("Module Activation");
			console.groupCollapsed("Module Activation");
			e.preventDefault();

			var data = $(e.currentTarget).data();
			var toLoad = "";
			var name = data.module || data.app;

			if( data.hasOwnProperty("module") ) {
				toLoad = loader.module( data.module );
				log("Loading Module " + name );
			} else if( data.hasOwnProperty("app") ) {
				toLoad = loader.app( data.app );
				log("Loading App " + name );
			}

			this.model.set({ currentModule : name });

			var IncomingModule = new toLoad.Workspace();
			IncomingModule.render();

			log("Module " + name + " activated!");

			console.groupEnd();
			console.timeEnd("Module Activation");
		}
	});

	BANTP.WorkspaceData = Backbone.Model.extend({
		idAttribute : '_id',
		defaults : {
			currentModule : "dashboard"
		},
		initialize : function() {
			log("Initializing BANTP Workspace Data Model");
			// Initialization
			this.on('change', function() {
				log("BANTP Workspace data update", this.toJSON() );
			});
		}
	});
	
	
	
	
})(loader.module('bantp'));