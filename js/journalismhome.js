//Open and close menu in mobile
function menu() {
  if (document.getElementById("nav1").style.display=="none"){
      document.getElementById("nav1").style.display="inline-block";}
else {document.getElementById("nav1").style.display="none";}
}
//Show menu when in full screen
function dis(){
  if ($(window).width()>817){
    document.getElementById("nav1").style.display="inline-block";
  }
  else{document.getElementById("nav1").style.display="none";}
}
//Close menu if resize to mobile
function setview(){
  if ($(window).width()<817){
    document.getElementById("nav1").style.display="none";
  }
}
//Close menu if click off to side
//function closemenu(){
//  if (document.getElementById("nav1").style.display="inline-block"){
//    document.getElementById("nav1").style.display="none");
//  }
//}
