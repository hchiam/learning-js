const {
  getRandomInteger,
  getRandomInteger_Inclusive,
} = require("./randomInteger.js");

describe("getRandomInteger", () => {
  it("works on [0,1)", () => {
    const a = 0;
    const b = 1;
    let output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBe(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBe(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBe(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBe(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBe(0);
  });

  it("works on [0,2)", () => {
    const a = 0;
    const b = 2;
    let output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
  });

  it("works on [1,2)", () => {
    const a = 1;
    const b = 2;
    let output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(0);
  });

  it("works on [2,3)", () => {
    const a = 2;
    const b = 3;
    let output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(1);
  });

  it("works on [5,10)", () => {
    const a = 5;
    const b = 10;
    let output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThan(4);
  });

  it("can hit both 0 and 1 in [0,2)", () => {
    const a = 0;
    const b = 2;
    const output = [];
    for (let i = 0; i < 100; i++) {
      output.push(getRandomInteger(a, b));
    }
    const uniques = new Set();
    for (let i = 0; i < 100; i++) {
      uniques.add(output[i]);
    }
    expect(uniques.size).toBe(2);
  });

  it("can hit both 1 and 2 in [1,3)", () => {
    const a = 1;
    const b = 3;
    const output = [];
    for (let i = 0; i < 100; i++) {
      output.push(getRandomInteger(a, b));
    }
    const uniques = new Set();
    for (let i = 0; i < 100; i++) {
      uniques.add(output[i]);
    }
    expect(uniques.size).toBe(2);
  });
});

describe("getRandomInteger_Inclusive", () => {
  it("works on [0,1]", () => {
    const a = 0;
    const b = 1;
    let output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThan(-1);
  });

  it("works on [0,2]", () => {
    const a = 0;
    const b = 2;
    let output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(-1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(-1);
  });

  it("works on [1,2]", () => {
    const a = 1;
    const b = 2;
    let output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(0);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThan(0);
  });

  it("works on [2,3]", () => {
    const a = 2;
    const b = 3;
    let output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(4);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(4);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(4);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(4);
    expect(output).toBeGreaterThan(1);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(4);
    expect(output).toBeGreaterThan(1);
  });

  it("works on [5,10]", () => {
    const a = 5;
    const b = 10;
    let output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(11);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(11);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(11);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(11);
    expect(output).toBeGreaterThan(4);
    output = getRandomInteger_Inclusive(a, b);
    expect(output % 1).toBe(0);
    expect(output).toBeLessThan(11);
    expect(output).toBeGreaterThan(4);
  });

  it("can hit both 0 and 1 in [0,1]", () => {
    const a = 0;
    const b = 1;
    const output = [];
    for (let i = 0; i < 100; i++) {
      output.push(getRandomInteger_Inclusive(a, b));
    }
    const uniques = new Set();
    for (let i = 0; i < 100; i++) {
      uniques.add(output[i]);
    }
    expect(uniques.size).toBe(2);
  });

  it("can hit both 1 and 2 in [1,2]", () => {
    const a = 1;
    const b = 2;
    const output = [];
    for (let i = 0; i < 100; i++) {
      output.push(getRandomInteger_Inclusive(a, b));
    }
    const uniques = new Set();
    for (let i = 0; i < 100; i++) {
      uniques.add(output[i]);
    }
    expect(uniques.size).toBe(2);
  });
});
