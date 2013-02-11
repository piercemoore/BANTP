(function(BANTP) {
	BANTP.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Bad Ass New Tab Page!");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.$el.html("BANTP initialized!");
	
			return this;
		}
	});
	
	
})(loader.module('bantp'));