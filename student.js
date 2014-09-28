window.onload = function() {
			var fb = new Firebase("https://resplendent-inferno-3490.firebaseio.com/");
			var tutorRef = fb.child('tutors');
			var things = [];

			// tutorRef.push({
			// 	name: "Alan the Loser",
			// 	subject: "English"
			// });

			tutorRef.on('child_added', function(child) {
				// console.log('hello');
				// console.log(child, child.val());
				// var data = child.val();
				// console.log(child);
				things.push(child.val());
			});
			// console.log(things);
			$("#search-button").click(function() {
				$("#results").html("");
				var query = $("#input").val();
				console.log(query);
				var results = [];
				for (var i = 0; i < things.length; i++)
				{
					if (query == things[i]['subject'])
					{
						results.push(things[i]['name']);
						$("#results").html($("#results").html() + "<br/> <a class='querResults' href='tutor_page.html?name=" + things[i]['name'] + "'>" +things[i]['name'] + "</a>");
					}
				}


				console.log(results);
			});

			$(document).ready(function(){
   				 $('#input').keypress(function(e){
    			  if(e.keyCode==13)
     			 $('#search-button').click();

   			 });
});
		}	