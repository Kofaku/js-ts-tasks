/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timer;
  let isInvoked = false; 

  return function (...args) {
    if (!isInvoked) {
      isInvoked = true;
      fn.apply(this, args);
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      isInvoked = false;
      fn.apply(this, args);
    }, delay);
  };
};
