const { fractionToDecimal } = require("./fractionToRecurringDecimal.js");

describe("fractionToDecimal", () => {
  it("works on 1/2", () => {
    const actual = fractionToDecimal(1, 2);
    const expected = "0.5";
    expect(actual).toBe(expected);
  });
  it("works on 2/1", () => {
    const actual = fractionToDecimal(2, 1);
    const expected = "2";
    expect(actual).toBe(expected);
  });
  it("works on 7/26", () => {
    const actual = fractionToDecimal(7, 26);
    const expected = "0.2(692307)";
    expect(actual).toBe(expected);
  });
  it("works on 1/7", () => {
    const actual = fractionToDecimal(1, 7);
    const expected = "0.(142857)";
    expect(actual).toBe(expected);
  });
  it("works on 4/333", () => {
    const actual = fractionToDecimal(4, 333);
    const expected = "0.(012)";
    expect(actual).toBe(expected);
  });
  it("works on 1/333", () => {
    const actual = fractionToDecimal(1, 333);
    const expected = "0.(003)";
    expect(actual).toBe(expected);
  });
  it("works on 22/7", () => {
    const actual = fractionToDecimal(22, 7);
    const expected = "3.(142857)";
    expect(actual).toBe(expected);
  });
  it("works on 7/-12", () => {
    const actual = fractionToDecimal(7, -12);
    const expected = "-0.58(3)";
    expect(actual).toBe(expected);
  });
  it("works on 1/214748364", () => {
    const actual = fractionToDecimal(1, 214748364);
    const expected =
      "0.00(000000465661289042462740251655654056577585848337359161441621040707904997124914069194026549138227660723878669455195477065427143370461252966751355553982241280310754777158628319049732085502639731402098131932683780538602845887105337854867197032523144157689601770377165713821223802198558308923834223016478952081795603341592860749337303449725)";
    expect(actual).toBe(expected);
  });
});
