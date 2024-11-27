/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  // eslint-disable-next-line func-names
  return function(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    function poli(text) {
      let i = 0;
      let j = text.length - 1;  
      while (i < j) {
        if (text[i] !== text[j]) {
          return false; 
        }
        // eslint-disable-next-line no-plusplus
        i++;
        // eslint-disable-next-line no-plusplus
        j--;
      }
      return true;
    }
    return poli(cleanedStr);
  };
};
