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
			var template = Handlebars.compile( $("#hb_todo_workspace").html() );

			this.$el.html( template({  }) );
	
			return this;
		}
	});
	
	
})(loader.app("todo"));