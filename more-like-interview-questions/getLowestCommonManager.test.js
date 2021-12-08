const {
  getLowestCommonManager,
  OrgChartNode,
} = require("./getLowestCommonManager.js");

describe("getLowestCommonManager", () => {
  it("works with direct children of root", () => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const org = {};
    for (let letter of abc) {
      org[letter.toLowerCase()] = new OrgChartNode(letter);
    }

    org.a.directReports = [org.b, org.c];

    const answer = getLowestCommonManager(org.a, org.b, org.c);

    expect(answer).toBe(org.a);
  });

  it("works with direct children", () => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const org = {};
    for (let letter of abc) {
      org[letter.toLowerCase()] = new OrgChartNode(letter);
    }

    org.a.directReports = [org.b, org.c];
    org.b.directReports = [org.d, org.e];

    const answer = getLowestCommonManager(org.a, org.d, org.e);

    expect(answer).toBe(org.b);
  });

  it("works when not direct children", () => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const org = {};
    for (let letter of abc) {
      org[letter.toLowerCase()] = new OrgChartNode(letter);
    }

    org.a.directReports = [org.b, org.c];
    org.b.directReports = [org.d, org.e];
    org.c.directReports = [org.f, org.g];
    org.d.directReports = [org.h, org.i];

    const answer = getLowestCommonManager(org.a, org.e, org.i);

    expect(answer).toBe(org.b);
  });

  it("works when current node is a target", () => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const org = {};
    for (let letter of abc) {
      org[letter.toLowerCase()] = new OrgChartNode(letter);
    }

    org.a.directReports = [org.b, org.c, org.d, org.e, org.f];
    org.b.directReports = [org.g, org.h, org.i];
    org.c.directReports = [org.j];
    org.d.directReports = [org.k, org.l];
    org.f.directReports = [org.m, org.n];
    org.h.directReports = [org.o, org.p, org.q, org.r];
    org.k.directReports = [org.s];
    org.p.directReports = [org.t, org.u];
    org.r.directReports = [org.v];
    org.v.directReports = [org.w, org.x, org.y];
    org.x.directReports = [org.z];

    const answer = getLowestCommonManager(org.a, org.t, org.h);

    expect(answer).toBe(org.h);
  });
});
