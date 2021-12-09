// compare with topologicalSort.js in /more-like-interview-questions

// console.log(findOrder(2, [[0, 1]]).join(",") === "1,0");
// const complexCase = findOrder(4, [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2],
// ]).join(",");
// console.log(complexCase === "0,1,2,3" || complexCase === "0,2,1,3");
// console.log(findOrder(1, []).join(",") === "0");
// console.log(
//   findOrder(3, [
//     [1, 0],
//     [1, 2],
//     [0, 1],
//   ]).join(",") === ""
// );

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}

topological sort of courses with prereqs:

e.g.: [0,1] means 1->0: toGet = 0; need = 1:
       0 needs 1
       1 helps 0

array for order, check if length === number of courses to take (otherwise send empty array [])

HT for tracking and reading deps fast

Ot(n + p) Os(n + p), where n = number of courses, and p = number of prerequisite links
basically Ot(edges + vertices) in DFS or BFS

 */
function findOrder(numCourses, prerequisites) {
  const order = [];
  const ht = {};

  // set up each course:
  for (let i = 0; i < numCourses; i++) {
    ht[i] = { needs: { length: 0 }, helps: { length: 0 } }; // objects instead of arrays for Ot(1) checks/updates
  }

  // set up deps:
  prerequisites.forEach((p) => {
    const toGet = p[0];
    const need = p[1];
    ht[toGet].needs[need] = true; // for Ot(1) needs/helps checks/updates
    ht[need].helps[toGet] = true;
    ht[toGet].needs.length++; // for Ot(1) length/now-indep checks
    ht[need].helps.length++;
    /*
      e.g.: [0,1] means 1->0: toGet = 0; need = 1:
      ht[0].needs[1]
      ht[1].helps[0]
      */
  });

  // put independent courses into queue:
  const q = [];
  Object.keys(ht).filter((course) => {
    if (ht[course].needs.length === 0) q.push(course);
  });

  // try processing independent courses: Ot(n)
  while (q.length) {
    const indepCourse = q.pop(); // shift vs pop doesn't matter in this case, and shift would slow it to Ot(n^2) anyways
    order.push(Number(indepCourse));

    // try processing courses it helps: Ot(p)
    Object.keys(ht[indepCourse].helps).forEach((courseToUpdate) => {
      if (courseToUpdate === "length") return;
      if (ht[courseToUpdate].needs[indepCourse]) {
        delete ht[courseToUpdate].needs[indepCourse];
        delete ht[indepCourse].helps[courseToUpdate];
        ht[courseToUpdate].needs.length--;
        ht[indepCourse].helps.length--;
      }
      if (ht[courseToUpdate].needs.length === 0) {
        q.push(courseToUpdate);
      }
    });

    if (ht[indepCourse].helps.length === 0) {
      delete ht[indepCourse];
    }
  }

  const stuck = q.length > 0 || Object.keys(ht).length > 0;
  return stuck ? [] : order;
}

module.exports = {
  findOrder,
};
