/*
BCR: Ot(n), Os(1)
naively check each node and min dist to both: Ot(~ n log n), Os(1)
DFS and track paths to each and lowest root: Ot(n), Os(log n)
DFS stack to track lowest manager candidate: Ot(n), Os(log n)
Also DFS = stack, technically.
Gotta keep track of the path breadcrumbs, so can't do any better.

KEY INSIGHT: find deepest subtree that contains both!
KEY STRUGGLE: also check if the current node is a target, not just children!

TODO: extend it to more than 3 reports people: use counts instead of booleans!
*/
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  function dfs(person) {
    // returns {lcm, reportsCount}
    let reportsCount = 0;
    if (person === reportOne || person === reportTwo) reportsCount++; // "only" increment reportsCount here.
    for (let directReport of person.directReports) {
      const subtree = dfs(directReport);
      if (subtree.lcm) return subtree; // this works because subtree hits it before supertree.
      // if (directReport === reportOne || directReport === reportTwo) reportsCount++; // doesn't work.
      reportsCount += subtree.reportsCount; // use recursion on the children instead.
    }
    let lcm = null;
    if (reportsCount === 2) lcm = person;
    return { lcm, reportsCount };
  }

  const LCMSubtree = dfs(topManager); // returns {lcm, reportsCount}
  const lowestCommonManager = LCMSubtree.lcm;
  return lowestCommonManager;
}

function getLowestCommonManager_OLD(topManager, reportOne, reportTwo) {
  if (reportOne === topManager) return topManager;
  if (reportTwo === topManager) return topManager;

  let candidate = topManager;
  let maxDepth = 0;

  function dfs(n, depth) {
    // returns: [found1, found2]
    // main idea: see if subtree contains both
    // find deepest subtree that contains both

    let found1 = false;
    if (n === reportOne || n.directReports.some((dr) => dr === reportOne)) {
      found1 = true;
    }

    let found2 = false;
    if (n === reportTwo || n.directReports.some((dr) => dr === reportTwo)) {
      found2 = true;
    }

    for (let dr of n.directReports) {
      const foundDR = dfs(dr, depth + 1);
      found1 = found1 || foundDR[0];
      found2 = found2 || foundDR[1];
    }

    // any sub-subtrees that contain both already updated maxDepth

    const subtreeContainsBoth = found1 && found2;
    const foundBetterCandidate = depth >= maxDepth; // >= not >, in case you're already at the lowest common manager!
    if (subtreeContainsBoth && foundBetterCandidate) {
      maxDepth = depth;
      candidate = n;
    }

    return [found1, found2];
  }

  dfs(topManager, 0);

  return candidate;
}

// This is an input class. Do not edit.
class OrgChartNode {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

module.exports = {
  getLowestCommonManager,
  OrgChartNode,
};

// const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const org = {};
// for (let letter of abc) {
//   org[letter.toLowerCase()] = new OrgChartNode(letter);
// }

// org.a.directReports = [org.b, org.c, org.d, org.e, org.f];
// org.b.directReports = [org.g, org.h, org.i];
// org.c.directReports = [org.j];
// org.d.directReports = [org.k, org.l];
// org.f.directReports = [org.m, org.n];
// org.h.directReports = [org.o, org.p, org.q, org.r];
// org.k.directReports = [org.s];
// org.p.directReports = [org.t, org.u];
// org.r.directReports = [org.v];
// org.v.directReports = [org.w, org.x, org.y];
// org.x.directReports = [org.z];

// const answer1 = getLowestCommonManager(org.a, org.t, org.h);
// console.log(answer1.name, answer1 === org.h);

// org.a.directReports = [org.b, org.c];
// org.b.directReports = [org.d, org.e];
// org.c.directReports = [org.f, org.g];
// org.d.directReports = [org.h, org.i];

// const answer2 = getLowestCommonManager(org.a, org.e, org.i);
// console.log(answer2.name, answer2 === org.b);
