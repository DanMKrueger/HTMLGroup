/* Justin Rojas, Abdul Raza, Justynn Palmer, Dan Krueger */

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
        alert("Please enter a valid username!")
    }else{
        alert("Welcome to Sitrus " + username + "!");
        location.href='index.html';
    }
}

function myClickFunction2(signup){
    if(signup == ""){
        alert("Looks like you did not complete your signup!")
    }else{
        alert("Thank you for signing up " + signup + "!");
        location.href='index.html';
    }
}
