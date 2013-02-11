(function(Bookmarks) {
	Bookmarks.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing Bookmarks View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.$el.html("BANTP Bookmarks rendered!");
	
			return this;
		}
	});
	
	
})(loader.module('bookmarks'));