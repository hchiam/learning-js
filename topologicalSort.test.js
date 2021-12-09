const { findOrder } = require("./topologicalSort.js");

describe("findOrder() topologicalSort.js", () => {
  it("works with 2, 0<-1", () => {
    expect(findOrder(2, [[0, 1]]).join(",")).toBe("1,0");
  });

  it("works with 4, 1<-0, 2<-0, 3<-1, 3<-2", () => {
    expect(
      findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ]).join(",")
    ).toBe("0,1,2,3");
  });

  it("works with 1, []", () => {
    expect(findOrder(1, []).join(",")).toBe("0");
  });
});
