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
			chrome.management.getAll(function(apps) {
				log(apps);
				var template = Handlebars.templates['quick_launch_single'];
				_.each(apps, function(app) {
					if( app.enabled && app.type != "extension" && app.type != "theme") {
						var appIcon = "";
						if( !app.icons ) {
							app.icon = chrome.extension.getURL("img/icon_48.png");						
						} else {
							_.each(app.icons, function(icon) {
								if( icon.size == 32 || icon.size == 48 || icon.size == 128 )
									app.icon = icon.url;
							});
						}
						$("#quick_launch .module").append( template( app ) );
					}
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
			var name = data.module || data.app;

			if( data.hasOwnProperty("module") ) {
				toLoad = loader.module( data.module );
			} else if( data.hasOwnProperty("app") ) {
				toLoad = loader.app( data.app );
			}

			this.model.set({ currentModule : name });

			var IncomingModule = new toLoad.Workspace();
			IncomingModule.render();
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