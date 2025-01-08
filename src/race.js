/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      // eslint-disable-next-line no-promise-executor-return
      return reject(new Error('Argument must be an array of promises'));
    }

    promisesArray.forEach(promise => {
      Promise.resolve(promise) 
        .then(resolve) 
        .catch(reject); 
    });
  });
};
