/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxLength = 0;
  let endIndex = 0;

  const commonMass = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        commonMass[i][j] = commonMass[i - 1][j - 1] + 1;
        if (commonMass[i][j] > maxLength) {
          maxLength = commonMass[i][j];
          endIndex = i;
        }
      }
    }
  }

  return str1.substring(endIndex - maxLength, endIndex);
  
};
