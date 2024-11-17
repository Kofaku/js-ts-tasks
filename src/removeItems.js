/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(item => {
    if (typeof item === 'object' && item !== null) {
      return JSON.stringify(item) !== JSON.stringify(value);
    }
    return item !== value;
  });
};
