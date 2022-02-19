// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I got clicked");
// }

//
// document.querySelector("button").addEventListener("click",function () {
//   alert("I got clicked");  //annonymous function in js
// })


var buttons = document.querySelectorAll(".drum"); //button is also fine but .drum to be just more specific
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    var drum = this.innerHTML;
    playSound(drum);
    buttonAnimation(drum);
  })
}

document.addEventListener("keypress",function(event){  //keypress event is applied on entire document rather than document elements
  //alert("key was pressed");
  //console.log(event);
  playSound(event.key);
  buttonAnimation(event.key);
})

function playSound(key){
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
  }
}

function buttonAnimation(key){
  var button = document.querySelector("."+key);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
