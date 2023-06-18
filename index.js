var buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function (event) {
  drumAction(event.key);
  buttonAnimation(event.key);
});

function handleClick() {
  var buttonText = this.innerHTML;

  drumAction(buttonText);
  buttonAnimation(buttonText);
}


function drumAction(char) {
  switch (char) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  
    default:
      console.log(buttonText);
      break;
  }
}

function buttonAnimation(buttonKey) {
  let button = document.querySelector("." + buttonKey);
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100)
}