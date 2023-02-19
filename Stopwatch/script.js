'use strict';

var secondsEl = document.querySelector('.seconds');
var tensEl = document.querySelector('.tens');
var btnStart = document.querySelector('.button-start');
var btnStop = document.querySelector('.button-stop');
var btnReset = document.querySelector('.button-reset');

let interval;
let seconds = '00';
let tens = '00';

const startTimer = function () {
  tens++;

  tensEl.innerHTML = tens > 9 ? tens : '0' + tens;

  if (seconds > 9) secondsEl.innerHTML = seconds;

  if (tens > 99) {
    seconds++;
    secondsEl.innerHTML = '0' + seconds;
    tens = 0;
    tensEl.innerHTML = '0' + 0;
  }
};

// <-- Event Listeners -->
btnStart.addEventListener('click', function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', function () {
  clearInterval(interval);
});

btnReset.addEventListener('click', function () {
  clearInterval(interval);
  seconds = '00';
  tens = '00';
  tensEl.innerHTML = tens;
  secondsEl.innerHTML = seconds;
});
