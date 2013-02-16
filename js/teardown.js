$(function() {
console.group("Building BANTP");

	$(".sidebar a").popover({
		placement : "right",
		trigger : "hover",
		delay : {
			show : 600,
			hide : 100
		}
	});

	var BANTP = loader.module('bantp');

	// Build the interface!
	var Application = new BANTP.Workspace();
	Application.render();

	var modules = {
		"Module One" : {
			"size" : 10,
			"description" : "This is a quick description about module one. It's awesome. That's it."
		},
		"Module Two" : {
			"size" : 6,
			"description" : "Module two? Awesome."
		}
	};

	// Now we build the dashboard itself
	_.each( modules, function(module, name) {
		$("#bantp_canvas").append('<div class="module"><h2>' + name + '</h2><p>' + module.description + '</p></div>');
	});
	
console.groupEnd();

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-21684633-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = 'https://ssl.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();


console.timeEnd("Page Build");
});