'use strict';

const imgContainer = document.querySelector('.img-container');
const userInfo = document.querySelector('.user-info');
const btn = document.querySelector('button');

const setRandomColor = function() {
  const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.documentElement.style.setProperty('--primary-color', randomHexColor);
}

const getUser = async () => {
  const response = await fetch('https://random-data-api.com/api/v2/users?response_type=json');
  const userData = await response.json();

  imgContainer.innerHTML = `<img src= ${userData.avatar}>`;
  userInfo.innerHTML = `
    <h2>${userData.first_name} ${userData.last_name}</h2>
    <h3><img src="img/vacancy.svg" alt="vacancy" />${userData.employment.title}</h3>
    <h3><img src="img/email.svg" alt="email" />${userData.email}</h3>
  `;

  setRandomColor();
};

window.addEventListener('load', getUser);
btn.addEventListener('click', getUser);
