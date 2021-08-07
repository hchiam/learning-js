const { KthLargest } = require("./kth-largest-element-simple-heap");

describe("kth largest element with simple heap code", () => {
  it("works with a fully-filled heap", () => {
    const solutionObject = new KthLargest(3, [4, 5, 8, 2]);
    const actions = [
      { given: 3, expect: 4 },
      { given: 5, expect: 5 },
      { given: 10, expect: 5 },
      { given: 9, expect: 8 },
      { given: 4, expect: 8 },
    ];
    actions.forEach((action) =>
      expect(solutionObject.add(action.given)).toBe(action.expect)
    );
  });

  it("works with a heap partially-filled initially", () => {
    const solutionObject = new KthLargest(3, [5, -1]);
    const actions = [
      { given: 2, expect: -1 },
      { given: 1, expect: 1 },
      { given: -1, expect: 1 },
      { given: 3, expect: 2 },
      { given: 4, expect: 3 },
    ];
    actions.forEach((action) =>
      expect(solutionObject.add(action.given)).toBe(action.expect)
    );
  });

  it("works with a heap that's empty initially", () => {
    const solutionObject = new KthLargest(1, []);
    const actions = [
      { given: -3, expect: -3 },
      { given: -2, expect: -2 },
      { given: -4, expect: -2 },
      { given: 0, expect: 0 },
      { given: 4, expect: 4 },
    ];
    actions.forEach((action) =>
      expect(solutionObject.add(action.given)).toBe(action.expect)
    );
  });
});
