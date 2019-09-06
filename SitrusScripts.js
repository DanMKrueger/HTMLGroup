function myCanvas() {
  var c = document.getElementById("myCanvas").getContext("2d");
  var img = new Image();;
  img.onload = function(){
      c.drawImage(img, 0, 0, 300, 300);
  }
  img.src="goldBar.jpg";
}

function myFunction(firstname, lastname){
    alert("Welcome to Sitrus " + firstname.value + "!");
}
