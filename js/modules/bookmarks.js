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
			var template = Handlebars.compile( $("#hb_bookmarks_workspace").html() );

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.module('bookmarks'));