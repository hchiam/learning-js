const { shipWithinDays } = require("./minShipSizeToShipPkgsInSeqInDDays");

describe("shipWithinDays", () => {
  it("works on 5 days example", () => {
    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const days = 5;
    expect(shipWithinDays(weights, days)).toBe(15);
  });
  it("works on 3 days example", () => {
    const weights = [3, 2, 2, 4, 1, 4];
    const days = 3;
    expect(shipWithinDays(weights, days)).toBe(6);
  });
  it("works on 4 days example", () => {
    const weights = [1, 2, 3, 1, 1];
    const days = 4;
    expect(shipWithinDays(weights, days)).toBe(3);
  });
  it("works on array of 1 element", () => {
    const weights = [1];
    const days = 1;
    expect(shipWithinDays(weights, days)).toBe(1);
  });
  it("works on if more days than weights are given", () => {
    const weights = [1, 4];
    const days = 10;
    expect(shipWithinDays(weights, days)).toBe(4);
  });
});
