const { radixSort } = require("./radixsort.js");

describe("radix sort", () => {
  it("works on a simple input", () => {
    expect(radixSort([2, 4, 1]).join(",")).toBe("1,2,4");
  });
  it("works on a complex input", () => {
    expect(radixSort([123, 321, 0, 2, 42, 1001]).join(",")).toBe(
      "0,2,42,123,321,1001"
    );
  });
  it("works on an empty input", () => {
    expect(radixSort([]).join(",")).toBe("");
    expect(radixSort().join(",")).toBe("");
  });
  it("works on an invalid input", () => {
    expect(radixSort(null).join(",")).toBe("");
  });
});
