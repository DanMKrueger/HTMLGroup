/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */
//document.getElementById("jsID").innerHTML = "asdF";

//Start Just Why N Section
//Unless you're using JQuery stay outside of the document ready function brackets
//--------------------------------------------------------------
$(document).ready(function(){

    $(".copyright").click(function(){
        $("#myElement").append("<img src= https://i0.wp.com/i.redd.it/r82alizwhre11.gif?w=600 ")
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
var x = 1;
function myButton() {
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

var foundingFather = [" Justin Rojas" , " Justynn Palmer " , " Abdul Raza" , " Dan Krueger"];
var newPeeps = [" Chuck Norris" , " Justin Timberlake" , " Donelys Familia"];
var totalPeeps = foundingFather.concat(newPeeps);
var y = 1;
var xy = 2

function combinePeeps() {
    if (y==1) {
        y=2

    }
    document.getElementById('foundPeeps').innerHTML = foundingFather;
    document.getElementById('newSchool').innerHTML = totalPeeps;

}
