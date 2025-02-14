/**
 * Calculates the sum of an array of numbers
 * @param {number[]} numbers - Array of numbers to sum
 * @returns {number} The sum of all numbers
 */
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers to average
 * @returns {number} The average of all numbers
 */
function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

module.exports = {
  sum,
  average,
};
