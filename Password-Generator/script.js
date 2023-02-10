const text = document.querySelector('#text');
const textLength = document.querySelector('#slider');
const btnGenerate = document.querySelector('#generate');
const btnClipboard = document.querySelector('#clipboard');
const textCopy = document.querySelector('#text-copy');

let passwordSigns =
  '0123456789acdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

btnGenerate.addEventListener('click', () => {
  const checked = document.getElementById('checkbox').checked;

  let password = '';
  let allPasswordSigns = passwordSigns;

  if (checked) allPasswordSigns += '@#$%^&*/=+?';

  for (let i = 0; i < textLength.value; i++) {
    let text =
      allPasswordSigns[Math.floor(Math.random() * allPasswordSigns.length)];
    password += text;
  }

  text.innerText = password;
  final_string = passwordSigns;
});

btnClipboard.addEventListener('click', () => {
  navigator.clipboard.writeText(text.innerText);
  textCopy.style.display = 'block';
  textCopy.textContent = 'Password copied!';

  setTimeout(() => {
    textCopy.style.display = 'none';
  }, 2000);
});
