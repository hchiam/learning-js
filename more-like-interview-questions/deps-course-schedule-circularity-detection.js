/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * https://leetcode.com/problems/course-schedule/
 * Just create a dependency HT and DFS through it to detect a cycle.
 */
var canFinish = function (numCourses, prerequisites) {
  const ht = createDepHT(prerequisites);
  console.log(ht);
  return !hasACycle(ht);
};

function createDepHT(prerequisites) {
  const ht = {};
  for (let p of prerequisites) {
    const [a, b] = p;
    if (a in ht) {
      ht[a].push(b); // question guarantees no repeats
    } else {
      ht[a] = [b];
    }
  }
  return ht;
}

function hasACycle(ht) {
  const keys = Object.keys(ht);
  for (let key of keys) {
    if (dfs_hasACycle(key, ht)) return true;
  }
  return false;
}

function dfs_hasACycle(key, ht, visited = {}) {
  if (visited[key]) {
    return true;
  } else if (key in ht) {
    visited[key] = true;
    for (let n of ht[key]) {
      if (dfs_hasACycle(n, ht, visited)) {
        return true;
      }
    }
    delete visited[key]; // !!!! MUST RESET TO AVOID "BRANCH" CONFLICTS (BACKTRACK) !!!!
    delete ht[key]; // !!!! MUST AVOID REPEAT WORK !!!!
  }
  return false;
}
