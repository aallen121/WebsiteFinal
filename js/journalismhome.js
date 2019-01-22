//Open and close menu in mobile
function menu() {
  if (document.getElementById("nav1").style.display == "none") {
      document.getElementById("nav1").style.display = "inline-block";
      document.getElementById("main-section").style.opacity = .5;}
else {document.getElementById("nav1").style.display = "none";
      document.getElementById("main-section").style.opacity = 1;}
}
//Show menu when in full screen
function dis() {
  if ($(window).width()>817){
    document.getElementById("nav1").style.display = "inline-block";
    document.getElementById("main-section").style.opacity = 1;
    }
  else{document.getElementById("nav1").style.display = "none";
  document.getElementById("main-section").style.opacity = 1;}
}
//Close menu if resize to mobile
function setview() {
  if ($(window).width()<817){
    document.getElementById("nav1").style.display = "none";}
  else {document.getElementbyId("nav1").style.display = "inline-block";}
}
//Close menu if click off to side
function closemenu() {
  if (document.getElementById("nav1").style.display == "inline-block") {
    document.getElementById("nav1").style.display = "none";
    document.getElementById("main-section").style.opacity = 1;
  }
}

//Resize portrait-orientation Photos
//function resz() {
//  portraitphoto = document.getElementsbyTagName("img")
//  if (portraitphoto.style.height > 600) {
//      portraitphoto.style.display = "block";
//      portraitphoto.style.width = 50%;
//      portraitphoto.style.marginleft = "auto";
//      portraitphoto.style.marginright = "auto";}
//  else{document.getElementsbyTagName("img").style.width=100%}
//}
