var theButton = document.querySelector("#theButton");
var switchOn = false;
var start = document.querySelector("#off");
var screenImg = document.querySelector("#screenImg");
var img1 = '<img src="img/crash1.jpeg" alt="crash" class = "crash1"></img>';
var img2 = '<img src="img/crash2.png" alt="crash" class = "crash1"></img>';
var img3 =
  '<img src="img/crashbandicut3.jpeg" alt="crash" class ="crash1"></img>';

var arrayimages = [img1, img2, img3];

var position = 0;

theButton.addEventListener("click", () => {
  if (!switchOn) {
    switchOn = true;
    screenImg.innerHTML = img1;
  } else if (switchOn) {
    switchOn = false;
    screenImg.innerHTML = "";
  }
});

start.addEventListener("click", () => {
  if (position == 0) {
    screenImg.innerHTML = img2;
    position++;
  } else if (position == 1) {
    screenImg.innerHTML = img3;
    position++;
  } else if (position == 2) {
    screenImg.innerHTML = img1;
    position = 0;
  }
});

/* the audio should be now playable */
var audio = document.createElement("audio");
audio.addEventListener("canplaythrough", (event) => {});
canplaythrough = (event) => {};
