const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let background = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartButtonClick() {
  console.log('click');
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
  background = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopButtonClick() {
  stopButton.setAttribute('disabled', '');
  startButton.removeAttribute('disabled');
  clearInterval(background);
  console.log('clack');
}

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
