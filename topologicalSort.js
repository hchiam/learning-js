// compare with topologicalSort.js in /more-like-interview-questions

// console.log(findOrder(2, [[0, 1]]).join(",") === "1,0");
// console.log(
//   findOrder(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ]).join(",") === "0,1,2,3"
// );
// console.log(findOrder(1, []).join(",") === "0");

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}

topological sort

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

  let stillToTake = Object.keys(ht);
  while (stillToTake.length) {
    // Ot(n)

    const countBeforeTriedProcessing = stillToTake.length;

    // try processing: Ot(p)
    stillToTake.forEach((canTake) => {
      const hasNoPrereqs = ht[canTake].needs.length === 0;
      if (hasNoPrereqs) {
        order.push(Number(canTake));

        // update courses it helps:
        Object.keys(ht[canTake].helps).forEach((courseToUpdate) => {
          // Ot(p)
          if (courseToUpdate === "length") return;
          if (ht[courseToUpdate].needs[canTake]) {
            delete ht[courseToUpdate].needs[canTake];
            ht[courseToUpdate].needs.length--;
          }
        });

        // finally, remove these courses:
        delete ht[canTake];
      }
    });

    stillToTake = Object.keys(ht); // Ot(n)

    const stuck =
      stillToTake.length > 0 &&
      stillToTake.length === countBeforeTriedProcessing;
    if (stuck) return [];
  }

  return order;
}

module.exports = {
  findOrder,
};
