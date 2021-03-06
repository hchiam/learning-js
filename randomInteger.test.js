const { getRandomInteger } = require("./randomInteger.js");

describe("the solution", () => {
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
});
