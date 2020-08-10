/*var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
   modal.style.display = "block";
}
span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
   modal.style.display = "none";
   }   
}

document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = true;
    }*/

/*let modal = document.getElementById('myModal'),
modalToggle = document.getElementById('myBtn'),
modalClose = document.querySelector('.close');

modalToggle.onclick = function() {
   modal.style.display="block";
}*/
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var send = document.getElementsByClassName("go_form")[0];
var list = document.getElementById('myMessage');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

send.onclick = function() {
    modal.style.display = "none";
}

list.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
