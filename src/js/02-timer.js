import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const button = document.querySelector('[data-start]');
let timerId = null;
let currentDate = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = selectedDates[0];
    console.log(currentDate);
    const compare = Date.now() - selectedDates[0];
    if (compare > 0) {
      window.alert('Please choose a date in the future');
      button.setAttribute('disabled', '');
    } else {
      button.removeAttribute('disabled');
    }
  },
});
function onStartButtonClick() {
  button.setAttribute('disabled', '');
  timerId = setInterval(() => {
    const milliseconds = currentDate - Date.now();
    const { day, hour, minute, second } = setTime(milliseconds);
    if (milliseconds < 1000) {
      clearInterval(timerId);
    }
    timer.textContent = `${day.padStart(2, '0')} : ${hour.padStart(
      2,
      '0'
    )} : ${minute.padStart(2, '0')} : ${second.padStart(2, '0')}`;
  }, 1000);
}

button.addEventListener('click', onStartButtonClick);

function setTime(millis) {
  const second = Math.floor((millis / 1000) % 60) + '';
  const minute = Math.floor((millis / 1000 / 60) % 60) + '';
  const hour = Math.floor((millis / 1000 / 60 / 60) % 60) + '';
  const day = Math.floor((millis / 1000 / 60 / 60 / 60) % 24) + '';

  return { day, hour, minute, second };
}
