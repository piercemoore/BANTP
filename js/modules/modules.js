(function(Modules) {
	Modules.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing Modules View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.$el.html("BANTP Modules rendered!");
	
			return this;
		}
	});
	
	
})(loader.module('modules'));