/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */
//document.getElementById("jsID").innerHTML = "asdF";

//Start Just Why N Section
//Unless you're using JQuery stay outside of the document ready function brackets
//--------------------------------------------------------------
$(document).ready(function(){
    const timeStop = new Audio("./addOnFiles/ZA WARUDO.mp3");

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
});
//End Just Why N Section
//--------------------------------------------------------------
function myCanvas() {
  var c = document.getElementById("myCanvas").getContext("2d");
  var img = new Image();;
  img.onload = function(){
      c.drawImage(img, 0, 0, 300, 300);
  }
  img.src="./addOnFiles/goldBar.jpg";
}

function LoginButton(username, password){
    if(username == ""){
        alert("Please enter a valid username!");
    }else if(password.length < 8){
        alert("Password must be at least 8 characters long!");
    }
    else{
        alert("Welcome to Sitrus " + username + "!");
        myName = username;
        location.href='index.html';
    }
}


function SignUp(signup, password, confirm, email){
    if(signup == ""){
        alert("Looks like you did not complete your signup!")
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("Email is not valid!");
    }
    else if(password != confirm){
        alert("Passwords do not match!")
    }
    else if(password.length < 8){
        alert("Password must be at least 8 characters long!");
    }
    else{
        alert("Thank you for signing up " + signup + "!");
        location.href='index.html';
    }
}

function PasswordReset(passwordreset, confirm){
    if(passwordreset == ""){
        alert("Error you did not complete your passwordreset")
    }else if(passwordreset != confirm){
        alert("Passwords do not match!");
    }
    else if(passwordreset.length < 8){
        alert("Password must be at least 8 characters long!");
    }
    else{
        alert("Your Password has been successfully been reset!");
        location.href='index.html';
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
