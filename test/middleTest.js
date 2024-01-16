const assert = require("../assertArraysEqual");
const middle = require("../middle");

describe('middle', () => {
  // 1
  it("returns [] for [2]", () => {
    const inputName = [2];
    const expectedOutput = [];
    assert(middle(inputName) === expectedOutput);
  });
  // 2
  it("returns [] for [1, 2]", () => {
    const inputName = [1, 2];
    const expectedOutput = [];
    assert(middle(inputName) === expectedOutput);
  });
  // 3
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const inputName = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert(middle(inputName) === expectedOutput);
  });
});