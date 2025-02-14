/**
 * Calculator class for performing basic arithmetic operations
 */
class Calculator {
  /**
   * Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Quotient of a and b
   * @throws {Error} If attempting to divide by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Evaluates a mathematical expression
   * @param {string} expression - Mathematical expression to evaluate
   * @returns {number} Result of the expression
   * @throws {Error} If the expression is invalid
   */
  evaluate(expression) {
    try {
      // Remove all whitespace
      expression = expression.replace(/\s+/g, "");

      // Basic validation
      if (!/^[0-9+\-*/().]+$/.test(expression)) {
        throw new Error("Invalid characters in expression");
      }

      // Use Function constructor to evaluate the expression
      // This is safe as we've already validated the input
      return new Function(`return ${expression}`)();
    } catch (error) {
      throw new Error("Invalid expression: " + error.message);
    }
  }
}

module.exports = Calculator;
