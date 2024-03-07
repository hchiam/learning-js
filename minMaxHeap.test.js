// jest minMaxHeap.test.js --watch

const { Heap } = require("./minMaxHeap.js");
const { MinMaxHeap_2 } = require("./minMaxHeap_2.js");

describe("Heap", () => {
  it("works", () => {
    const m = new Heap("min");
    // [51, 200, 52, 10000, 100, 1000, 10001]
    [100, 200, 51, 52, 1000, 10000, 10001].forEach((x) => {
      m.add(x);
    });

    expect(JSON.stringify(m.h)).toBe("[51,52,100,200,1000,10000,10001]");
    expect(m.pop()).toBe(51);
    expect(JSON.stringify(m.h)).toBe("[52,200,100,10001,1000,10000]");
    expect(m.pop()).toBe(52);
    expect(JSON.stringify(m.h)).toBe("[100,200,10000,10001,1000]");
  });
  it("works", () => {
    const m = new Heap("min");
    [10, 100, 200].forEach((x) => {
      m.add(x);
    });
    expect(JSON.stringify(m.h)).toBe("[10,100,200]");
    m.pop();

    expect(JSON.stringify(m.h)).toBe("[100,200]");
  });
  it("works with negative numbers included", () => {
    const m = new Heap("min");
    [-1, -3, -4, 2, 1, 3].forEach((x) => {
      m.add(x);
    });
    expect(JSON.stringify(m.h)).toBe("[-4,-1,-3,2,1,3]");
  });
  it("works with max", () => {
    const m = new Heap("max");
    [-1, -3, -4, 2, 1, 3].forEach((x) => {
      m.add(x);
    });
    expect(JSON.stringify(m.h)).toBe("[3,1,2,-3,-1,-4]");
  });
  it("works with multi-digit numbers", () => {
    const m = new Heap("max");
    [4, 0, -3, 100, 20, -50].forEach((x) => {
      m.add(x);
    });
    expect(JSON.stringify(m.h)).toBe("[100,20,-3,0,4,-50]");
  });
});

describe("MinMaxHeap_2", () => {
  it("works", () => {
    const m = new MinMaxHeap_2([100, 200, 51, 52, 1000, 10000, 10001], "min");
    // [51, 200, 52, 10000, 100, 1000, 10001]

    expect(JSON.stringify(m.heap)).toBe("[51,52,100,200,1000,10000,10001]");
    expect(m.pop()).toBe(51);
    expect(JSON.stringify(m.heap)).toBe("[52,200,100,10001,1000,10000]");
    expect(m.pop()).toBe(52);
    expect(JSON.stringify(m.heap)).toBe("[100,200,10000,10001,1000]");
  });
  it("works", () => {
    const m = new MinMaxHeap_2([10, 100, 200], "min");
    expect(JSON.stringify(m.heap)).toBe("[10,100,200]");
    m.pop();

    expect(JSON.stringify(m.heap)).toBe("[100,200]");
  });
  it("works with negative numbers included", () => {
    const m = new MinMaxHeap_2([-1, -3, -4, 2, 1, 3], "min");
    // TODO: not same order as the other test:
    // expect(JSON.stringify(m.heap)).toBe("[-4,-1,-3,2,1,3]");
    expect(JSON.stringify(m.heap)).toBe("[-4,-3,-1,2,1,3]");
  });
  it("works with max", () => {
    const m = new MinMaxHeap_2([-1, -3, -4, 2, 1, 3], "max");
    // TODO: not same order as the other test:
    // expect(JSON.stringify(m.heap)).toBe("[3,1,2,-3,-1,-4]");
    expect(JSON.stringify(m.heap)).toBe("[3,2,-1,-3,1,-4]");
  });
  it("works with multi-digit numbers", () => {
    const m = new MinMaxHeap_2([4, 0, -3, 100, 20, -50], "max");
    expect(JSON.stringify(m.heap)).toBe("[100,20,-3,0,4,-50]");
  });
});
