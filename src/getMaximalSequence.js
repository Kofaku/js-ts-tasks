/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let count = 1; 
  let longestCount = 1; 
  let maxIndex = 0; 
  let tempIndex = 0; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count+=1;
    } 
    else {
      if (count > longestCount) {
        longestCount = count;
        maxIndex = tempIndex;
      }
      count = 1; 
      tempIndex = i;
    }
  }

  if (count > longestCount) {
    longestCount = count;
    maxIndex = tempIndex;
  }

  return arr.slice(maxIndex, maxIndex + longestCount);
  
}
