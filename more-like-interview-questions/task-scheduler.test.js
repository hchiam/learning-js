const { leastInterval } = require("./task-scheduler.js");

describe("the solution", () => {
  it("works on invalid input", () => {
    expect(leastInterval([], 2)).toBe(0);
    expect(leastInterval(null, 2)).toBe(NaN);
  });

  it("works on basic input", () => {
    const tasks = ["A", "A", "A", "B", "B", "B"];
    const coolDown = 2;
    const schedule = "AB_AB_AB";
    expect(leastInterval(tasks, coolDown)).toBe(schedule.length);
  });

  it("works on fancier input", () => {
    const tasks = [
      "A",
      "A",
      "A",
      "B",
      "B",
      "B",
      "C",
      "C",
      "C",
      "D",
      "D",
      "D",
      "E",
      "E",
    ];
    const coolDown = 2;
    const schedule = "ABCDEABCDEABCD"; // you can insert D and E inside slot intervals
    expect(leastInterval(tasks, coolDown)).toBe(schedule.length);
  });

  it("works on fancier input", () => {
    const tasks = ["A", "A", "A", "B", "B", "B", "C", "C", "D"];
    const coolDown = 3;
    const schedule = "ABCDABC_AB"; // you can insert D inside slot intervals
    expect(leastInterval(tasks, coolDown)).toBe(schedule.length);
  });
});
