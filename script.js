//your JS code here. If required.
const btn = document.getElementById("openModal");
const modal = document.getElementByquerySelector(".modal");
const closebtn = document.getElementByquerySelector(".close-modal");

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