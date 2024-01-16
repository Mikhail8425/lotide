const assert = require("../assertEqual");
const tail = require("../tail");

describe('tail', () => {
  // 1
  it("returns [Labs, Week2] for [Lighthouse, Labs, Week2]", () => {
    const inputName = ['Lighthouse', 'Labs', 'Week2'];
    const expectedOutput = ['Labs', 'Week2'];
    assert(tail(inputName), expectedOutput);
  });
  // 2
  it("returns empty from empty", () => {
    const inputName = [];
    const expectedOutput = [];
    assert(tail(inputName), expectedOutput);
  });
  // 3
  it("returns empty from [1]", () => {
    const inputName = [1];
    const expectedOutput = [];
    assert(tail(inputName), expectedOutput);
  });
});

