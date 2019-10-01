/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */
//document.getElementById("jsID").innerHTML = "asdF";
//Start Just Why N Section
//Unless you're using JQuery stay outside of the document ready function brackets
//--------------------------------------------------------------
$(document).ready(function() {
	const timeStop = new Audio("./addOnFiles/ZA WARUDO.mp3");

	// Easter egg that creates a small dancing gif when the
	// copyright symbol is clicked. If the gif already exists
	// it's deleted.

	$(".copyright").click(function() {
		if ($("#EasterEgg").length) {
			$("#EasterEgg").remove();
		}else {
			$(".copyright").append(" <img id = 'EasterEgg' width='100' height='100'src='https://i0.wp.com/i.redd.it/r82alizwhre11.gif?w=600'></img>");
		}
	});

	// If the words "the world" in the scrolling text are
	// clicked, play an animation & sound clip and pause the
	// marquee for 5 seconds.

	$("#theWorld").click(function(e) {
		$("body").append("<img id = 'Dio' style = 'opacity: 0.2; position: fixed; top: 0; left: 0; bottom: 0; right: 0' width='100%' height='100%'src='https://thumbs.gfycat.com/DeficientSilentCero-size_restricted.gif'>");
			timeStop.play();

			setTimeout(function() {
				$("#scrollingDesc").trigger("stop");

				setTimeout(function() {
					$("#scrollingDesc").trigger("start");
				}, 5000);
			}, 1900);

			setTimeout(function() {
				$('#Dio').remove();
			}, 4500);
	});

	// FAQ Page Script for dynamically changing picture from
	// canvas element to img element. Example of working with
	// future/dynamic elements
	if ($("#myCanvas").length) {
		$context = $('#myCanvas')[0].getContext("2d");
		$img = new Image();
		$img.onload = function() {
			$context.drawImage($img, 0, 0, 300, 300);
		}
		$img.src = "./addOnFiles/goldBar.jpg";

		$(document).on("click",'#myCanvas',function() {
			$('#myCanvas').remove();
			$('#removeableDiv').append("<img id='orangeGif' src='https://media0.giphy.com/media/fnJWA6rIGgYmlksSEN/giphy.gif?cid=790b7611690160899a1860e577d4d8fff24d31a69719f932&rid=giphy.gif' width='300' height='300'></img>");
		});

		$(document).on("click",'#orangeGif',function() {
			$('#orangeGif').remove();
			$('#removeableDiv').append("<canvas id='myCanvas' width='300' height='300' style='border:1px solid #d3d3d3;'></canvas>");

			$context = $('#myCanvas')[0].getContext("2d");
			$img = new Image();
			$img.onload = function() {
				$context.drawImage($img, 0, 0,300, 300);
			}
			$img.src = "./addOnFiles/goldBar.jpg";
		});
	}
	// When a user tries to Sign Up, send the approrpiate HTTP
	// Request for processing
	$(document).keyup(function($e) {
		if ($e.which == 13) {
			$("#Submit").click();
		}
	});

});
// End Just Why N Section
// --------------------------------------------------------------

function LoginButton(user, password) {
	if (user == "") {
		$('.loginPopup').empty();
		$('.loginPopup')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Enter a valid username!</div>");
	} else if (password.length < 8) {
		$('.loginPopup').empty();
		$('.loginPopup')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be atlesat 8 characters long!</div>");
	} else {
		// alert("Welcome to Sitrus " + username + "!");
			$.ajax({
				url : "http://localhost:8080/login",
				type : 'POST',
				contentType : 'application/json',
				data : {
					username : user,
					userPassword : password
				},
				success : function(msg) {
					if (msg == 0) {
						$('.loginPopup').empty();
						$('.loginPopup')
								.prepend(
										"<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Welcome to Sitrus!</div>");
						//alert("Logged in!");
						setTimeout(function() {
							location.href = 'index.html';
						}, 1000);
					} else {
						$('.loginPopup').empty();
						$('.loginPopup')
								.prepend(
										"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Username or Password incorrect!</div>");
					}
				},
				error : function() {
					alert("AJAX Fail");
				}

			});
	}
}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}

function SignUp(user, password, confirm, newEmail, fname, lname, zipcode) {
	if (user == "") {

		// alert("Looks like you did not complete your signup!");
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> You did not complete your signup!</div>");
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Email is not valid!</div>");
	} else if (zipcode.length != 5) {
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Zipcode is not valid!</div>");
	} else if (!/^\d*$/.test(zipcode)) {
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Zipcode is not valid!</div>");
	} else if (password != confirm) {
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Passwords do not match!</div>");
	} else if (password.length < 8) {
		$('.BootStrapPopUp').empty();
		$('.BootStrapPopUp')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be at least 8 characters long!</div>");
	} else {
			$.ajax({
				url : "http://localhost:8080/signup",
				type : 'POST',
				contentType : 'application/json',
				data : {
					username : user,
					userPassword : password,
					FirstName : fname,
					LastName : lname,
					email : newEmail,
					zip : zipcode,
					userType : "user"
				},
				success : function(msg) {
					if (msg == 0) {
						$('.BootStrapPopUp').empty();
						$('.BootStrapPopUp')
								.prepend(
										"<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Account created! Redirecting to home page!</div>");
						//alert("Account Created!");
						setTimeout(function() {
							location.href = 'index.html';
						}, 1000);
					} else if (msg == 2) {
						//alert("Email already used!");
						$('.BootStrapPopUp').empty();
						$('.BootStrapPopUp')
								.prepend(
										"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Email already used!</div>");
					} else {
						// alert("Username already exists!");
						$('.BootStrapPopUp').empty();
						$('.BootStrapPopUp')
								.prepend(
										"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Username already exists!</div>");
					}
				},
				error : function() {
					alert("AJAX Fail");
				}

			});
	}
}



function PasswordReset(user, passwordreset, confirm) {
	if (passwordreset == "") {
		$('.passwordResetPopup').empty();
		$('.passwordResetPopup')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> You did not complete your password reset!</div>");
	} else if (passwordreset != confirm) {
		$('.passwordResetPopup').empty();
		$('.passwordResetPopup')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Passwords do not match!</div>");
	} else if (passwordreset.length < 8) {
		$('.passwordResetPopup').empty();
		$('.passwordResetPopup')
				.prepend(
						"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be at least 8 characters long!</div>");
	} else {

			$.ajax({
				url : "http://localhost:8080/passwordreset",
				type : 'POST',
				contentType : 'application/json',
				data : {
					username : user,
					userPassword : confirm

				},
				success : function(msg) {
					if (msg == 0) {
						$('.passwordResetPopup').empty();
						$('.passwordResetPopup')
								.prepend(
										"<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Password Reset!</div>");
						// alert("Account Created!");
						setTimeout(function() {
							location.href = 'index.html';
						}, 1000);
					} else {
						// alert("Username already exists!");
						$('.passwordResetPopup').empty();
						$('.passwordResetPopup')
								.prepend(
										"<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Username not found!</div>");
					}
				},
				error : function() {
					alert("AJAX Fail");
				}

			});
	}
}

var x = 1;
function DateButton() {
	if (x == 1) {
		x = 2;
		document.getElementById('time').innerHTML = Date();
	}

	else {
		x = 1;
		document.getElementById('time').innerHTML = null;
	}

}

var z = 1;
function mouseMoveFunction() {
	document.getElementById("demo").innerHTML = z += 1;
}

var foundingFather = [ "Justin Rojas", " Justynn Palmer", " Abdul Raza",
		" Dan Krueger" ];
var text = "";
var y = 1;

function combinePeeps() {
	if (y == 1) {
		y = 2;
		for (var i = 0; i < foundingFather.length; i++) {
			text += foundingFather[i] + "<br>";
		}
		document.getElementById('foundPeeps').innerHTML = text;
	}

	else {
		y = 1;
		document.getElementById('foundPeeps').innerHTML = null;
	}
	text = "";
}
