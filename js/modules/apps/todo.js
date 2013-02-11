(function(Todo) {
	Todo.Workspace = Backbone.View.extend({
		el : "#bantp_canvas",
		events : {
			// All event delegators here
		},
		initialize : function() {
			log("Initializing Todo Application View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;

			this.$el.html("BANTP To-do list Application rendered!");
	
			return this;
		}
	});
	
	
})(loader.app("todo"));