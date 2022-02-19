
// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I got clicked");
// }

//
// document.querySelector("button").addEventListener("click",function () {
//   alert("I got clicked");  //annonymous function in js
// })


var buttons = document.querySelectorAll(".drum");  //button is also fine but .drum to be just more specific
for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    alert("I got clicked");
  })
}
