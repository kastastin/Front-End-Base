'use strict';

const toggle = document.querySelector('.toggle');
const card = document.querySelector('.card');

toggle.addEventListener('click', function () {
  card.classList.toggle('active');
});
