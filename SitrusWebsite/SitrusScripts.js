/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */
//document.getElementById("jsID").innerHTML = "asdF";

//Start Just Why N Section
//Unless you're using JQuery stay outside of the document ready function brackets
var z = 0;

//--------------------------------------------------------------
$(document).ready(function(){

    $("p").mouseover(function(){
      $("p").css("background-color", "yellow");
    });
    $("p").mouseout(function(){
      $("p").css("background-color", "lightgray");
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

function myClickFunction(username){
    if(username == ""){
        alert("Please enter a valid username!");
    }else{
        alert("Welcome to Sitrus " + username + "!");
        myName = username;
        location.href='index.html';
    }
}

function mouseMoveFunction() {
  document.getElementById("demo").innerHTML = z+=1;
}
