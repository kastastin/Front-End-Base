'use strict';

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const getRandomNumber = function () {
  return Math.floor(Math.random() * hex.length);
};

const btnHandler = function () {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

btn.addEventListener('click', btnHandler);
