// compare with the newer ../topologicalSort.js

console.log(
  topologicalSort(
    [1, 2, 3, 4],
    [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ]
  )
);

// time O(jobs + deps) space O(jobs + deps)
function topologicalSort(jobs, deps) {
  if (!jobs || jobs.length === 0) return [];

  const sequence = []; // output space O(jobs + deps)

  const ht = setUpHashTable(jobs, deps); // time O(jobs + despace O( space O(jobs + deps)

  // set up queue: (space O(jobs))
  const q = [];
  for (let job of Object.keys(ht)) {
    if (ht[job].dependenciesCount === 0) q.push(ht[job]); // {dependenciesCount#,[dependents]}
  }

  // process ones with no deps first, to free up dependents:
  while (q.length) {
    // time O(jobs)
    const dependency = q.shift(); // TODO: time O(1) op with a LL queue
    // const dependency = ht[job];
    const hasNoDependencies = dependency.dependenciesCount === 0;
    if (hasNoDependencies) {
      sequence.push(dependency.job); // no more deps, free to complete
      // free up dependents: time O(+ deps)
      for (let dependent of dependency.dependents) {
        const count = ht[dependent].dependenciesCount;
        ht[dependent].dependenciesCount = Math.max(count - 1, 0);
        if (ht[dependent].dependenciesCount === 0) {
          q.push(ht[dependent]); // {dependenciesCount#,[dependents]}
        }
      }
    }
  }

  return areAnyStillWaiting(ht) ? [] : sequence; // time O(jospace O( space O(1)
}

function setUpHashTable(jobs, deps) {
  // time O(jobs + despace O( space O(jobs + deps)

  // assumes all listed in deps are in jobs
  const ht = {};
  for (let job of jobs) {
    ht[job] = {
      job: job,
      dependenciesCount: 0,
      dependents: [],
    };
  }
  for (let dep of deps) {
    const dependency = dep[0];
    const dependent = dep[1];
    ht[dependent].dependenciesCount++;
    ht[dependency].dependents.push(dependent);
  }

  return ht;
}

function areAnyStillWaiting(ht) {
  // time O(jospace O( space O(1)
  for (let job of Object.keys(ht)) {
    if (ht[job].dependenciesCount > 0) return true;
  }
  return false;
}
