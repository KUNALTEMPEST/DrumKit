var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var drumKey = this.innerHTML;
    MakeSound(drumKey);
    ButtonAnimation(drumKey);
  });
}

document.addEventListener("keydown", function(event)
{
  MakeSound(event.key);
  ButtonAnimation(event.key);
});



function MakeSound(key) {
  switch (key) {
    case 'w':
      var drumAudio1 = new Audio("sounds/tom-1.mp3");
      drumAudio1.play();
      break;

    case 'a':
      var drumAudio2 = new Audio("sounds/tom-2.mp3");
      drumAudio2.play();
      break;

    case 's':
      var drumAudio3 = new Audio("sounds/tom-3.mp3");
      drumAudio3.play();
      break;

    case 'd':
      var drumAudio4 = new Audio("sounds/tom-4.mp3");
      drumAudio4.play();
      break;

    case 'j':
      var drumAudio5 = new Audio("sounds/snare.mp3");
      drumAudio5.play();
      break;

    case 'k':
      var drumAudio6 = new Audio("sounds/crash.mp3");
      drumAudio6.play();
      break;

    case 'l':
      var drumAudio7 = new Audio("sounds/kick-bass.mp3");
      drumAudio7.play();
      break;
  }
}

function ButtonAnimation(key)
{
  var activeButton = document.querySelector("."+ key);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");}, 100);

}
