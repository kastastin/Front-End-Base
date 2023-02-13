'use strict';

const btns = document.querySelector('.buttons');
const counterElement = document.querySelector('.counter');

let counterValue = 0;

const counter = (event) => {
  const btn = event.target.classList.value;

  if (btn === 'buttons__increment') counterValue++;
  if (btn === 'buttons__decrement') counterValue--;
  if (btn === 'buttons__reset') counterValue = 0;

  counterElement.textContent = counterValue;
};

btns.addEventListener('click', counter);
