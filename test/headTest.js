const assert = require("chai").assert;
const head = require("../head");

describe('head', () => {
  // 1
  it("returns 1 for [1, 2, 3]", () => {
    const inputName = [1, 2, 3];
    const expectedOutput = 1;
    assert.strictEqual(head(inputName), expectedOutput);
  });
  // 2
  it("returns '5' for ['5']", () => {
    const inputName = ["5"];
    const expectedOutput = "5";
    assert.strictEqual(head(inputName), expectedOutput);
  });
  // 3
  it("returns '5' for ['5, 6, 7']", () => {
    const inputName = [5, 6, 7];
    const expectedOutput = 5;
    assert.strictEqual(head(inputName), expectedOutput);
  });
});