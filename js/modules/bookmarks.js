(function(Bookmarks) {
	Bookmarks.Workspace = Backbone.View.extend({
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Bookmarks View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.module('bookmarks'));