const { sum, average } = require("../src/utils");

describe("Utils", () => {
  describe("sum", () => {
    test("should return 0 for empty array", () => {
      expect(sum([])).toBe(0);
    });

    test("should return the sum of numbers", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });
  });

  describe("average", () => {
    test("should return 0 for empty array", () => {
      expect(average([])).toBe(0);
    });

    test("should return the average of numbers", () => {
      expect(average([1, 2, 3])).toBe(2);
    });
  });
});
