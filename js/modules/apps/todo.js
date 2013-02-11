(function(Todo) {
	Todo.Workspace = Backbone.View.extend({
		events : {
			// All event delegators here
		},
		initialize : function() {
			console.log("Initializing Todo Application View");
		},
		render : function() {
			// Put the thing on the page!
			var self = this;
	
			return this;
		}
	});
	
	
})(loader.app("Todo"));