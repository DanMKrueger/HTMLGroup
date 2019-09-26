/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */
//document.getElementById("jsID").innerHTML = "asdF";

//Start Just Why N Section
//Unless you're using JQuery stay outside of the document ready function brackets
//--------------------------------------------------------------
$(document).ready(function(){
  /*  const timeStop = new Audio("./addOnFiles/ZA WARUDO.mp3");

    //Easter egg that creates a small dancing gif when the copyright symbol is clicked. If the gif already exists it's deleted.

    $(".copyright").click(function(){
        if($("#EasterEgg").length)
        {
            $("#EasterEgg").remove();
        }
        else
        {
            $(".copyright").append(" <img id = 'EasterEgg' width='100' height='100'src='https://i0.wp.com/i.redd.it/r82alizwhre11.gif?w=600'></img>");
        }
    });

    //If the words "the world" in the scrolling text are clicked, play an animation & sound clip and pause the marquee for 5 seconds.

    $("#theWorld").click(function(e){

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

    //FAQ Page Script for dynamically changing picture from canvas element to img element. Example of working with future/dynamic elements
          $context = $('#myCanvas')[0].getContext("2d");
          $img = new Image();
          $img.onload = function(){
              $context.drawImage($img, 0, 0, 300, 300);
          }
          $img.src="./addOnFiles/goldBar.jpg";

          $(document).on("click", '#myCanvas', function(){
              $('#myCanvas').remove();
              $('#removeableDiv').append("<img id='orangeGif' src='https://media0.giphy.com/media/fnJWA6rIGgYmlksSEN/giphy.gif?cid=790b7611690160899a1860e577d4d8fff24d31a69719f932&rid=giphy.gif' width='300' height='300'></img>");
          });

          $(document).on("click", '#orangeGif', function(){
              $('#orangeGif').remove();
              $('#removeableDiv').append("<canvas id='myCanvas' width='300' height='300' style='border:1px solid #d3d3d3;'></canvas>");

                  $context = $('#myCanvas')[0].getContext("2d");
                  $img = new Image();
                  $img.onload = function(){
                      $context.drawImage($img, 0, 0, 300, 300);
                  }
                  $img.src="./addOnFiles/goldBar.jpg";
                });

                //When a user tries to Sign Up, send the approrpiate HTTP Request for processing
        $('#submit').click(function() {

                 $.ajax({
                type: "PUT",
                url: "http://localhost:8080/signup",
                contentType: 'application/json',
                data:{
                username: "user",
                userPassword: "pass",
                FirstName: "Justynn",
                LastName: "Palmer",
                email: "something@gmail.com",
                zip: "19038",
                usertType: "admin"
                },
                success:function(){
                    alert("worked");
                location.reload();
                    },
                    error:function(){
                     alert("invalid credentials");
                          }
                });
            }); */



        $.ajax({
            url:"http://localhost:8080/signup",
            type: 'POST',
            data:{
                username: "user",
                userPassword: "pass",
                FirstName: "Justynn",
                LastName: "Palmer",
                email: "something@gmail.com",
                zip: "19038",
                userType: "admin"
            },
            dataType: 'json'

        });
});
//End Just Why N Section
//--------------------------------------------------------------
function EnterKeyPressed(){
    var input = document.getElementById("Password");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("Submit").click();
        }
    });
}
function LoginButton(username, password){
    if(username == ""){
        $('.loginPopup').empty();
        $('.loginPopup').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Enter a valid username!</div>");
    }else if(password.length < 8){
        $('.loginPopup').empty();
        $('.loginPopup').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be atlesat 8 characters long!</div>");
    }
    else{
        // alert("Welcome to Sitrus " + username + "!");
        $('.loginPopup').empty();
        $('.loginPopup').prepend("<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Welcome to Sitrus!</div>");
        setTimeout(function(){
            location.href='index.html';
        }, 1000);
    }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function SignUp(signup, password, $confirm, $email){
    if(signup == ""){

        // alert("Looks like you did not complete your signup!");
        $('.BootStrapPopUp').empty();
        $('.BootStrapPopUp').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> You did not complete your signup!</div>");
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($email)){
        $('.BootStrapPopUp').empty();
        $('.BootStrapPopUp').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Email is not valid!</div>");
    }
    else if(password != $confirm){
        $('.BootStrapPopUp').empty();
        $('.BootStrapPopUp').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Passwords do not match!</div>");    }
    else if(password.length < 8){
        $('.BootStrapPopUp').empty();
        $('.BootStrapPopUp').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be at least 8 characters long!</div>");
    }
    else{
        $('.BootStrapPopUp').empty();
        $('.BootStrapPopUp').prepend("<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Account created! Redirecting to home page!</div>");
        // setTimeout(function(){
        //     location.href='index.html';
        // }, 1000);
        //
        // $.ajax({
        //     url: "http://localhost:8080/signup",
        //     type: "POST",
        //     data:{
        //         username: "DanKr",
        //         userPassword: $confirm,
        //         firstName: "Dann",
        //         lastName: "Krueeeeger",
        //         email: $email,
        //         zip: "49855",
        //         userType: "user"
        //     },
        //
        //     success: function(result){
        //         console.log(result);
        //     },
        //     error: function(error){
        //         console.log(error);
        //     }
        // });
        //
        // var theBody = {
        //     username: "DanKr",
        //     userPassword: $confirm,
        //     firstName: "Dann",
        //     lastName: "Krueeeeger",
        //     email: $email,
        //     zip: "49855",
        //     userType: "user"
        //
        // }
        // $.post("http://localhost:8080/signup", theBody, function(data, status){
        //     console.log("Got here");
        // });

        // var theUN = "Username";
        // var theBody = theUN.concat(confirm,"Dan", "Krueger", email, "49855" , "admin");
        // httpGet("http://localhost:8080/signup", theBody);
    }
}

// function httpGet(theUrl, theBody){
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "PUT", theUrl, true ); // false for synchronous request
//     xmlHttp.send( theBody );
//     return xmlHttp.responseText;
// }

function PasswordReset(passwordreset, confirm){
    if(passwordreset == ""){
        $('.passwordResetPopup').empty();
        $('.passwordResetPopup').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> You did not complete your password reset!</div>");
    }else if(passwordreset != confirm){
        $('.passwordResetPopup').empty();
        $('.passwordResetPopup').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Passwords do not match!</div>");    }
    else if(passwordreset.length < 8){
        $('.passwordResetPopup').empty();
        $('.passwordResetPopup').prepend("<div class='alert alert-danger' style='font-size:2'><strong>Warning!</strong> Password must be at least 8 characters long!</div>");
    }
    else{
        $('.passwordResetPopup').empty();
        $('.passwordResetPopup').prepend("<div class='alert alert-success' style='font-size:2'><strong>Success!</strong> Password has been reset!</div>");
        setTimeout(function(){
            location.href='index.html';
        }, 1000);
    }
}

var x = 1;
function DateButton() {
    if (x==1){
        x=2;
        document.getElementById('time').innerHTML = Date();
    }

    else {
        x=1;
        document.getElementById('time').innerHTML = null;
    }

}

var z = 1;
function mouseMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

var foundingFather = ["Justin Rojas" , " Justynn Palmer" , " Abdul Raza" , " Dan Krueger"];
var text = "";
var y = 1;

function combinePeeps() {
    if (y==1) {
        y=2;
        for(var i=0; i < foundingFather.length; i++){
            text += foundingFather[i] + "<br>";
        }
        document.getElementById('foundPeeps').innerHTML = text;
    }


    else {
        y=1;
        document.getElementById('foundPeeps').innerHTML = null;
    }
    text = "";
}
