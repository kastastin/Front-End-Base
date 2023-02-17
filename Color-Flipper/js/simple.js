'use strict';

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ['red', 'rgba(182,128,217)', '#f15025', 'yellow', 'green'];

const getRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};

const btnHandler = function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
};

btn.addEventListener('click', btnHandler);
