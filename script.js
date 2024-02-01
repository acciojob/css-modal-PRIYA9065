//your JS code here. If required.
var btn = document.getElementById("openModal");
var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".close-modal");

btn.onclick = function(){
	modal.style.display = "block";
}

closebtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}