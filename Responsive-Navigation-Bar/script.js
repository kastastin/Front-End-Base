'use strict';

const navBar = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  navBar.classList.toggle('active');
});
