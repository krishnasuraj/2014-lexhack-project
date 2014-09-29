$(function(){
	var url = window.location.href;
	var arr = url.split('?');
	arr = arr[1].split('=');
	var name = arr[1];

	var things = [];
	var fix = name.split('%20').join(' ');
	console.log(fix);
	var fb = new Firebase("https://resplendent-inferno-3490.firebaseio.com/");
	var tutorRef = fb.child('tutors');

	tutorRef.on('child_added', function(child) {
		if (fix == child.val()['name'])
		{
			var result = (child.val()['email']);
			$("#name").text("Name: " + fix);
			$("#email").text("Email: " + result);
			$("#border").html($("#border").html() + "<a id='bidbutton' href='agreement.html?name=" + fix + "'>Bid</a>");
			return;
		}
	});
});


/*
We have clean name that can be matched to fb.
Goal: fetch email.,
match name to 
*/