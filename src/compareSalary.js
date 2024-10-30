/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let max=0;
  let min=0;
  if ((firstSalary>secondSalary)&&(firstSalary>thirdSalary)) max=firstSalary;
  if ((secondSalary>firstSalary)&&(secondSalary>thirdSalary)) max=secondSalary;
  if ((thirdSalary>firstSalary)&&(thirdSalary>secondSalary)) max=thirdSalary;

  if ((firstSalary<secondSalary)&&(firstSalary<thirdSalary)) min=firstSalary;
  if ((secondSalary<firstSalary)&&(secondSalary<thirdSalary)) min=secondSalary;
  if ((thirdSalary<firstSalary)&&(thirdSalary<secondSalary)) min=thirdSalary;

  return max-min;
};
