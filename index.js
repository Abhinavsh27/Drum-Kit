var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("mouseover", function() {

    var buttonInnerHTML = this.innerHTML;  //this(trigger the event)->shows the identity of function what to do.

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {         //key->used to show the printed representation.

  switch (key) {
    case "a":
      var aud1 = new Audio("sounds/tom-1.mp3");
      aud1.play();
      break;

    case "b":
      var aud2 = new Audio("sounds/tom-2.mp3");
      aud2.play();
      break;

    case "h":
      var aud3 = new Audio('sounds/tom-3.mp3');
      aud3.play();
      break;

    case "i":
      var aud4 = new Audio('sounds/tom-4.mp3');
      aud4.play();
      break;

    case "n":
      var aud5 = new Audio('sounds/snare.mp3');
      aud5.play();
      break;

    case "e":
      var aud6 = new Audio('sounds/crash.mp3');
      aud6.play();
      break;

    case "v":
      var aud7 = new Audio('sounds/kick-bass.mp3');
      aud7.play();
      break;

    default: console.log(key);
    alert("NICELY DONE")
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);    ///dot is used to concatenate the key.

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
