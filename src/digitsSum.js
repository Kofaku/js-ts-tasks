/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  if (n<0) n=n*(-1)
  let str=n.toString();
  let sum=0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
};
