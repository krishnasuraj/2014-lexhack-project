window.onload = function() {
	var url = window.location.href;
	var arr = url.split('?');
	arr = arr[1].split('=');
	var name = arr[1];
	var fix = name.split('%20').join(' ');
	console.log(fix);
	$("#title").text("Post request for " + fix + ":");

	var fb = new Firebase("resplendent-inferno-3490.firebaseio.com");
	var tutorRef = fb.child('tutors');
	var things = [];
	tutorRef.on('child_added', function(child) {
	things.push(child.val());
	});
	
	$("#createprof").click(function() {
		for (var i = 0; i < things.length; i++) {
			if (things[i]['name'] == fix)  {
				console.log(things[i]);
				var request = tutorRef.child(things[i]);
				request.push({
				wage: $("#wage").val(),
				date: $("#date").val(),
				time: $("#time").val(),
				email: $("#email").val()
				});
			}
		}
	});
}