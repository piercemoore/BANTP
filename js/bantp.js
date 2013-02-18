(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		el : "body",
		events : {
			"click .sidebar a" : "activateModule",
			"click .app-launch" : "launchApp"
		},
		initialize : function() {
			this.model = new BANTP.WorkspaceData();
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
			
			// Populate and render the quick application launcher
			getLocalData("quickLaunchApps", function(apps) {
				log("Building quick launch apps:", apps);
				_.each(apps, function(app) {
					log("Adding app to quick launcher", app);
					var template = Handlebars.templates['quick_launch_single'];
					$("#quick_launch_target").append( template( app ) );	
				});
			});

			// Instantiate only the necessary dashboard module
			var DashboardModule = loader.module('dashboard');
			var Dashboard = new DashboardModule.Workspace();

			Dashboard.render();
	
			return this;
		},
		activateModule : function(e) {
			e.preventDefault();

			var data = $(e.currentTarget).data();
			var toLoad = "";
			var name = data.module || data.app || data.helper;

			if( _.has(data, "module") || _.has(data, "app")) {
				if(_.has(data, "module")) {
					toLoad = loader.module( data.module );
				} else if(_.has(data, "app")) {
					toLoad = loader.app( data.app );
				}

				this.model.set({ currentModule : name });

				var IncomingModule = new toLoad.Workspace();
				IncomingModule.render();
			} else if(_.has(data, "helper")){
				var bg = chrome.extension.getBackgroundPage();
				bg[data.helper]();
			}
		},
		launchApp : function(e) {
			e.preventDefault();
			var id = $(e.currentTarget).data("app");
			chrome.management.launchApp(id, function() {
				window.close();
			});
		}
	});

	BANTP.WorkspaceData = Backbone.Model.extend({
		idAttribute : '_id',
		defaults : {
			currentModule : "dashboard"
		},
		initialize : function() {
			// Initialization
			this.on('change', function() {
				log("BANTP Workspace data update", this.toJSON() );
			});
		}
	});
	
	
	
	
})(loader.module('bantp'));