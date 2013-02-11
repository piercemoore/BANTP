(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		dispatcher : _.clone(Backbone.Events),
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Bad Ass New Tab Page!");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.module('bantp'));