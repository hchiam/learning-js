const {
  RandomizedSet,
  getRandomInteger,
} = require("./insertDeleteGetRandomO1.js");

describe("getRandomInteger", () => {
  it("works", () => {
    const a = { 1: true, 2: true, 3: true, 4: true, 5: true };
    const keys = Object.keys(a);
    expect(keys.length).toBe(5);
    let randomInteger = getRandomInteger(0, keys.length);
    expect(randomInteger).toBeGreaterThanOrEqual(0);
    expect(randomInteger).toBeLessThan(5);
    randomInteger = getRandomInteger(0, keys.length);
    expect(randomInteger).toBeGreaterThanOrEqual(0);
    expect(randomInteger).toBeLessThan(5);
    randomInteger = getRandomInteger(0, keys.length);
    expect(randomInteger).toBeGreaterThanOrEqual(0);
    expect(randomInteger).toBeLessThan(5);
    randomInteger = getRandomInteger(0, keys.length);
    expect(randomInteger).toBeGreaterThanOrEqual(0);
    expect(randomInteger).toBeLessThan(5);
    randomInteger = getRandomInteger(0, keys.length);
    expect(randomInteger).toBeGreaterThanOrEqual(0);
    expect(randomInteger).toBeLessThan(5);
  });
});

describe("RandomizedSet", () => {
  it("works on a simple example", () => {
    const obj = new RandomizedSet();
    const param_1 = obj.insert(1);
    const param_2 = obj.remove(2);
    const param_3 = obj.getRandom();
    expect(param_1).toBe(true);
    expect(param_2).toBe(false);
    expect([1, 2].includes(param_3)).toBe(true);
  });

  it("works if only run removes", () => {
    const obj = new RandomizedSet();
    const param_1 = obj.remove(1);
    const param_2 = obj.remove(2);
    const param_3 = obj.remove(3);
    expect(param_1).toBe(false);
    expect(param_2).toBe(false);
    expect(param_3).toBe(false);
  });

  it("works if only run getRandom", () => {
    const obj = new RandomizedSet();
    const param_1 = obj.getRandom();
    const param_2 = obj.getRandom();
    const param_3 = obj.getRandom();
    expect(param_1).toBe(null);
    expect(param_2).toBe(null);
    expect(param_3).toBe(null);
  });

  it("works on a bigger example", () => {
    const rs = new RandomizedSet();
    const output = [];

    output.push(rs.insert(1)); // 0
    output.push(rs.remove(2)); // 1
    output.push(rs.getRandom()); // 2
    output.push(rs.getRandom()); // 3
    output.push(rs.insert(1)); // 4
    output.push(rs.insert(5)); // 5
    output.push(rs.remove(2)); // 6
    output.push(rs.remove(1)); // 7
    output.push(rs.getRandom()); // 8
    output.push(rs.getRandom()); // 9
    output.push(rs.getRandom()); // 10
    output.push(rs.insert(11)); // 11
    output.push(rs.insert(12)); // 12
    output.push(rs.insert(13)); // 13
    output.push(rs.getRandom()); // 14
    output.push(rs.getRandom()); // 15
    output.push(rs.getRandom()); // 16
    output.push(rs.getRandom()); // 17
    output.push(rs.getRandom()); // 18
    output.push(rs.getRandom()); // 19
    output.push(rs.getRandom()); // 20

    expect(output[0]).toBe(true);
    expect(output[1]).toBe(false);
    expect(output[2]).toBe(1);
    expect(output[3]).toBe(1);
    expect(output[4]).toBe(false);
    expect(output[5]).toBe(true);
    expect(output[6]).toBe(false);
    expect(output[7]).toBe(true);
    expect(output[8]).toBe(5);
    expect(output[9]).toBe(5);
    expect(output[10]).toBe(5);
    expect(output[11]).toBe(true);
    expect(output[12]).toBe(true);
    expect(output[13]).toBe(true);
    expect([5, 11, 12, 13].includes(output[14])).toBe(true);
    expect([5, 11, 12, 13].includes(output[15])).toBe(true);
    expect([5, 11, 12, 13].includes(output[16])).toBe(true);
    expect([5, 11, 12, 13].includes(output[17])).toBe(true);
    expect([5, 11, 12, 13].includes(output[18])).toBe(true);
    expect([5, 11, 12, 13].includes(output[19])).toBe(true);
    expect([5, 11, 12, 13].includes(output[20])).toBe(true);
  });
});
