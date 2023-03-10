'use strict';

class AffineCipher {
  constructor(signs) {
    this.signs = signs;
  }

  cipher(text, a, b, operation) {
    let result = '';
    const aInverse = this._modInverse(a, this.signs.length);

    for (const character in text) {
      const alphabetIndex = this.signs.indexOf(text[character]);

      if (alphabetIndex === -1) {
        result += text[character];
      } else {
        let cipherIndex;
        switch (operation) {
          case 'encrypt':
            // E(x) = (ax + b) mod m
            cipherIndex = (a * alphabetIndex + b) % this.signs.length;
            break;

          case 'decrypt':
            // D(y) = a ** (-1) * (y - b) mod m
            cipherIndex =
              (aInverse * (alphabetIndex - b + this.signs.length)) %
              this.signs.length;
            break;

          default:
            result = 'Wrong operation!';
        }

        result += this.signs[cipherIndex];
      }
    }

    return result;
  }

  // If a is mutually prime with m, then there is only one inverse of a−1,
  // and why a−1 ∈ {1,..., m − 1} and a−1 is reciprocally prime to m
  _modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    return 1;
  }
}

// const signs = 'abcdefghijklmnopqrstuvwxyz ';
// const a = new AffineCipher(signs);
// console.log(a.cipher('hello world', 13, 15, 'encrypt'));
// console.log(a.cipher('znxxiceiuxa', 13, 15, 'decrypt'));
