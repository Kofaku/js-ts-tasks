/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
   const str = String(word).toLowerCase();

   if (typeof word === 'string') {
     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
     return alphabet.split('').every((char) => str.includes(char));
   }
 
   if (typeof word === 'number') {
     const digits = '0123456789';
     return digits.split('').every((digit) => str.includes(digit));
   }

   return false;
};
