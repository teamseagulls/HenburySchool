function openStaff(evt, x) {
  var i, desc, options;
  desc = document.getElementsByClassName("desc");
  console.log(desc);
  for (i = 0; i < desc.length; i++) {
    desc[i].style.display = "none";
  }
  options = document.getElementsByClassName("options");
  for (i = 0; i < options.length; i++) {
    options[i].className = options[i].className.replace(" active", "");
  }
  document.getElementById(x).style.display = "block";
  evt.currentTarget.className += " active";
}

function confirmation() {
  var x = confirm("Submit this form?");
}
