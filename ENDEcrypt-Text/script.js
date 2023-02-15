'use strict';

const encrypted = document.querySelector('.encrypted-text-input');
const secretKey = document.querySelector('#key');
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const btnChange = document.querySelector('.btn-change');

const textMessage = document.querySelector('.text .text-message');
const encryptedTextMessage = document.querySelector(
  '.encrypted-text .text-message'
);
const textInput = document.querySelector('.text-input');
const encryptedTextInput = document.querySelector('.encrypted-text-input');
const encryptedKey = document.querySelector('#encrypted-key');
const decryptedKey = document.querySelector('#decrypted-key');

let text = '';
let encryptedText = '';
let operation = '';

const checkInput = function () {
  if (!textInput.value || !decryptedKey.value) {
    alert('Enter text and secret key to encrypt!');
    return;
  }

  return textInput.value;
};

const transformText = function (operation, input) {
  // prettier-ignore
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];

  let result = '';

  [...input].forEach((letter) => {
    const index = letters.indexOf(letter);
    let newIndex;
    operation === 'encrypt'
      ? (newIndex = (index + Number(decryptedKey.value)) % letters.length)
      : (newIndex = -(Number(decryptedKey.value) - index));
    result += letters.at(newIndex);
  });

  return result;
};

const addOutput = function (output) {
  if (!output) return;
  encrypted.value = output;
  encryptedTextMessage.style.display = 'none';
};

const encryptHandler = function () {
  text = checkInput();
  const encryptedText = transformText('encrypt', text);
  addOutput(encryptedText);
};

const decryptHandler = function () {
  encryptedText = encryptedTextInput.value;
  const decryptedText = transformText('decrypt', encryptedText);
  textInput.value = decryptedText;
  textMessage.style.display = 'none';
};

const changeOperation = function () {
  if (checkInput()) {
    renderOperation('decrypt');
  }
};

const renderOperation = function (type) {
  if (type === 'encrypt') {
    textMessage.style.display = 'none';
    encryptedTextMessage.style.display = 'flex';
    textInput.placeholder = 'Type here something to encrypt...';

    decryptedKey.placeholder = '12';
    encryptedKey.closest('.key').style.display = 'none';

    btnDecrypt.style.display = 'none';
  } else if (type === 'decrypt') {
    textMessage.style.display = 'flex';
    encryptedTextMessage.style.display = 'none';
    textInput.placeholder = '';
    textInput.value = '';

    btnDecrypt.style.display = 'block';
    btnEncrypt.style.display = 'none';

    decryptedKey.closest('.key').style.display = 'none';
    encryptedKey.closest('.key').style.display = 'flex';
    encryptedKey.placeholder = decryptedKey.value;
  }
};

const initialState = function () {
  operation = 'encrypt';
  renderOperation(operation);
};
initialState();

// <-- Event Listeners -->
btnChange.addEventListener('click', changeOperation);
btnEncrypt.addEventListener('click', encryptHandler);
btnDecrypt.addEventListener('click', decryptHandler);
