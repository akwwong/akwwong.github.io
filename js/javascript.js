// javascript module
// this is for form submission validation

window.onload = function() {
  let form = document.querySelector('#contactMe');

  form.onsubmit = function(event) {
    // validate input
    if(!form.checkValidity()) {
      // if not valid
      event.preventDefault();
      return false;
    }
    return true;
  }
}

function show(){
  if (document.getElementById("contactMe-hourlyRate").classList.contains("hide"))
  document.getElementById("contactMe-hourlyRate").classList.remove("hide");
  if(document.getElementById("hourlyRate").required == false)
  document.getElementById("hourlyRate").required = true;
}

function hide(){
  if (!document.getElementById("contactMe-hourlyRate").classList.contains("hide")) {
    document.getElementById("contactMe-hourlyRate").classList.add("hide");
  }
  if (document.getElementById("hourlyRate").required == true) {
    document.getElementById("hourlyRate").required = false;
  }
  document.getElementById("hourlyRate").value = "";
}