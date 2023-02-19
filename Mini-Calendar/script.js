'use strict';

const date = new Date();
const dayNum = date.getDay() + 1;

const day = date.getDate();
const year = date.getFullYear();

const month = new Intl.DateTimeFormat('en-US', {
  month: 'long'
}).format(date);
const weekday = new Intl.DateTimeFormat('en-US', {
  weekday: 'short'
}).format(date);

document.querySelectorAll('li').forEach((li) => {
  if (li.textContent === weekday) li.classList.add('current');
});

const currentEl = document.querySelector('.current');

const h1 = document.createElement('h1');
h1.innerHTML = day;
currentEl.appendChild(h1);

const h3 = document.createElement('h3');
h3.innerHTML = year;
currentEl.appendChild(h3);

const h5 = document.createElement('h5');
h5.innerHTML = month;
currentEl.appendChild(h5);
