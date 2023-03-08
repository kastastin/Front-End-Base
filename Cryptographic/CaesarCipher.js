class CaesarCipher {
  constructor(signs) {
    this.signs = signs;
    this._shiftedSigns = '';
  }

  cipher(text, key, operation) {
    let result = '';
    this._shiftAlhabet(key);

    for (const textSign in text) {
      let shiftedSignIndex;
      switch (operation) {
        case 'encrypt':
          shiftedSignIndex = this.signs.indexOf(text[textSign]);
          result += this._shiftedSigns[shiftedSignIndex];
          break;

        case 'decrypt':
          shiftedSignIndex = this._shiftedSigns.indexOf(text[textSign]);
          result += this.signs[shiftedSignIndex];
          break;

        default:
          result = 'Wrong operation!';
      }
    }

    return result;
  }

  _shiftAlhabet(shiftValue) {
    this._shiftedSigns = this.signs.slice(shiftValue);
    this._shiftedSigns += this.signs.slice(0, shiftValue);
  }
}

// const signs = 'abcdefghijklmnopqrstuvwxyz ';
// const caesar = new CaesarCipher(signs);
// console.log(caesar.cipher('hello world', 3, 'encrypt'));
// console.log(caesar.cipher('khoorczruog', 3, 'decrypt'));
