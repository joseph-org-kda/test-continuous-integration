const sum = require("./sum");

describe("Test Sum function", () => {
  test("should return sum of array", () => {
    const values = [1, 2, 3, 4];
    expect(sum(values)).toBe(10);
  });
});
