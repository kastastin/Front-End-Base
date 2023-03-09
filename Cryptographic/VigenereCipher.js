class VigenereCipher {
  constructor(signs) {
    this.signs = signs;
    this._box = [];
  }

  cipher(text, key, operation) {
    let result = '';

    this._generateBox();
    let repeatedString = this._repeatString(key, text);

    for (const textIndex in text) {
      let rowIndex, columnIndex;
      switch (operation) {
        case 'encrypt':
          // Row index equal to text index
          rowIndex = this.signs.indexOf(text[textIndex]);
          // Column index equal to repeated string (key) index
          columnIndex = this.signs.indexOf(repeatedString[textIndex]);
          // Зашифрованный символ равный пересечению индекса строки и колонки
          result += this._box[rowIndex][columnIndex];
          break;

        case 'decrypt':
          // Look for the text index of the string with repeated string (key)
          rowIndex = this.signs.indexOf(repeatedString[textIndex]);
          columnIndex = this._box[rowIndex].indexOf(text[textIndex]);
          result += this.signs[columnIndex];
          break;

        default:
          result = 'Wrong operation!';
      }
    }

    return result;
  }

  _generateBox() {
    for (const signIndex in this.signs) {
      let boxRow = this.signs.slice(signIndex);
      boxRow += this.signs.slice(0, signIndex);
      this._box.push(boxRow);
    }
  }

  /**
   * Repeating the first line to the length of the second line
   * @param {String} firstString String to repeat
   * @param {String} secondString A string up to the length of which the first string is to be repeated
   * @returns String after repeat
   */
  _repeatString(firstString, secondString) {
    let resultString = '';

    let firstStringIndex = 0;
    for (const secondStringIndex in secondString) {
      if (secondStringIndex % firstString.length === 0) firstStringIndex = 0;
      resultString += firstString[firstStringIndex];
      firstStringIndex++;
    }

    return resultString;
  }
}

const signs = 'abcdefghijklmnopqrstuvwxyz ';
const vigenere = new VigenereCipher(signs);
console.log(vigenere.cipher('hello world', 'lemon', 'encrypt'));
console.log(vigenere.cipher('sixzak  eyo', 'lemon', 'decrypt'));
