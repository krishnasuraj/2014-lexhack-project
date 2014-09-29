		window.onload = function() {
			var fb = new Firebase("resplendent-inferno-3490.firebaseio.com");
			var tutorRef = fb.child('tutors');
			var things = [];
			tutorRef.on('child_added', function(child) {
				// console.log('hello');
				// console.log(child, child.val());
				// var data = child.val();
				// console.log(child);
				things.push(child.val());
			});

			$("#createprof").click(function(){
				for (var i = 0; i < things.length; i++) {
					console.log(things[i].email);
					console.log($("#email").val())
					if (things[i]['email'] == $("#email").val() && things[i]['pass'] == $("#pass").val())  {
						window.location.href = "tutor_page.html?name=" + things[i]['name'];
					}
				}
			});
		}
