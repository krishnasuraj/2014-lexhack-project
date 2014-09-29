window.onload = function() {
	var fb = new Firebase("resplendent-inferno-3490.firebaseio.com");
	var tutorRef = fb.child('tutors');
	
	$("#createprof").click(function() {
		if($("#name").val() == "" || $("#subject").val() == "" || $("#email").val() == "" || $("#pass").val == "") return;
		else {
			tutorRef.push({
			name: $("#name").val(),
			subject: $("#subject").val(),
			email: $("#email").val(),
			pass: $("#pass").val()
			});
		}
	});
}