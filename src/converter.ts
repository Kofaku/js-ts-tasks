/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (from === 'm' && to === 'mi') {
    return parseFloat((value * 0.000621371).toFixed(2));
  } else if (from === 'mi' && to === 'm') {
    return parseFloat((value * 1609.34).toFixed(2));
  }

  if (from === 'gr' && to === 'pound') {
    return parseFloat((value * 0.00220462).toFixed(2));
  } else if (from === 'pound' && to === 'gr') {
    return parseFloat((value * 453.592).toFixed(2));
  }

  if (from === 'C' && to === 'K') {
    return parseFloat((value + 273.15).toFixed(2));
  } else if (from === 'K' && to === 'C') {
    return parseFloat((value - 273.15).toFixed(2));
  }

  throw new Error('Unsupported conversion');
};
