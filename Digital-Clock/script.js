'use strict';

const clockEL = document.querySelector('.clock');

const clock = function () {
  const date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let period = 'AM';

  if (hours == 0) hours = 12;

  if (hours > 12) {
    hours = hours - 12;
    period = 'PM';
  }

  seconds = seconds >= 10 ? seconds : `0 ${seconds}`;
  minutes = minutes >= 10 ? minutes : `0 ${minutes}`;
  hours = hours >= 10 ? hours : `0 ${hours}`;

  const time = `${hours}:${minutes}:${seconds} ${period}`;
  clockEL.innerText = time;
  setTimeout(clock, 1000);
};

clock();
