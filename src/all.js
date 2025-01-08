/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {

  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    const results = []; 
    let completed = 0; 

    if (!Array.isArray(promisesArray)) {
      // eslint-disable-next-line no-promise-executor-return
      return reject(new Error('Argument must be an array of promises'));
    }

    if (promisesArray.length === 0) {
      // eslint-disable-next-line no-promise-executor-return
      return resolve([]);
    }

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise) 
        .then(value => {
          results[index] = value; 
          // eslint-disable-next-line no-plusplus
          completed++; 
          if (completed === promisesArray.length) {
            resolve(results); 
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
