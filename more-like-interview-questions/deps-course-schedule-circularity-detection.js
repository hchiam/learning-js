/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * https://leetcode.com/problems/course-schedule/
 * Just create a dependency HT and DFS through it to detect a cycle.
 * But use backtracking to avoid conflicting branches,
 * AND IMPORTANTLY avoid repeatedly checking whether the same start node has a cycle.
 */
var canFinish = function (numCourses, prerequisites) {
  // hash table:
  const ht = {};
  for (let p of prerequisites) {
    const [a, b] = p;
    if (a in ht) {
      ht[a].to.push(b); // question guarantees no repeats
    } else {
      ht[a] = { to: [b] };
    }
  }

  for (let a of Object.keys(ht)) {
    if (foundCycle(a)) return false;
  }
  return true;

  // DFS with backtracking while finding a counterexample:
  function foundCycle(a) {
    if (!(a in ht)) return false;
    if (ht[a].visited) return true;

    ht[a].visited = true;
    for (let b of ht[a].to) {
      if (foundCycle(b)) return true;
    }
    delete ht[a].visited; // !!!! MUST RESET TO AVOID "BRANCH" CONFLICTS (BACKTRACK) !!!!
    delete ht[a]; // AVOID REPEATING WORK!!! ALREADY CHECKED IF ht[a] HAS CYCLES

    return false;
  }
};
