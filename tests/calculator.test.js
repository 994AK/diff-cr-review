const Calculator = require("../src/calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("Basic Operations", () => {
    test("adds two numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test("subtracts two numbers correctly", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(1, 1)).toBe(0);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test("multiplies two numbers correctly", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    test("divides two numbers correctly", () => {
      expect(calculator.divide(6, 2)).toBe(3);
      expect(calculator.divide(5, 2)).toBe(2.5);
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test("throws error when dividing by zero", () => {
      expect(() => calculator.divide(5, 0)).toThrow(
        "Division by zero is not allowed"
      );
    });
  });

  describe("Expression Evaluation", () => {
    test("evaluates simple expressions correctly", () => {
      expect(calculator.evaluate("2+3")).toBe(5);
      expect(calculator.evaluate("6-4")).toBe(2);
      expect(calculator.evaluate("3*4")).toBe(12);
      expect(calculator.evaluate("8/2")).toBe(4);
    });

    test("evaluates complex expressions correctly", () => {
      expect(calculator.evaluate("2+3*4")).toBe(14);
      expect(calculator.evaluate("(2+3)*4")).toBe(20);
      expect(calculator.evaluate("2+(3*4)")).toBe(14);
      expect(calculator.evaluate("10/2+3")).toBe(8);
    });

    test("handles decimal numbers correctly", () => {
      expect(calculator.evaluate("2.5+1.5")).toBe(4);
      expect(Number(calculator.evaluate("3.3*3").toFixed(1))).toBe(9.9);
    });

    test("throws error for invalid expressions", () => {
      expect(() => calculator.evaluate("2+")).toThrow("Invalid expression");
      expect(() => calculator.evaluate("2++2")).toThrow("Invalid expression");
      expect(() => calculator.evaluate("abc")).toThrow("Invalid expression");
    });
  });
});
