const button = document.querySelectorAll(".drum");

var numberOfDrumButtons = button.length;
for(i=0; i< numberOfDrumButtons; i++){
button[i].addEventListener("click",function(){
  var buttonInnerHTML = this.innerHTML;
  clickinnertext(buttonInnerHTML);
});
}
document.addEventListener("keypress", function(event){
 clickinnertext(event.key);
})

function clickinnertext(txt){
switch(txt){
  case 'w' :
  var wAudio = new Audio("sounds/tom-1.mp3");
  return wAudio.play();
  break;
  case 'a' :
  var aAudio = new Audio("sounds/tom-2.mp3");
  return aAudio.play();
  break;
  case 's' :
  var sAudio = new Audio("sounds/tom-3.mp3");
  return sAudio.play();
  break;
  case 'd' :
  var dAudio = new Audio("sounds/tom-4.mp3");
  return dAudio.play();
  break;
  case 'j' :
  var jAudio = new Audio("sounds/crash.mp3");
  return jAudio.play();
  break;
  case 'k' :
  var kAudio = new Audio("sounds/kick-bass.mp3");
  return kAudio.play();
  break;
  case 'l' :
  var lAudio = new Audio("sounds/snare.mp3");
  return lAudio.play();
  break;

}}
