// https://www.youtube.com/watch?v=-JE8P2TiJEg
// https://nodejs.org/api/worker_threads.html

const { worker } = require("worker_threads");

exampleUsage();

function exampleUsage() {
  const jobsData = Array.from({ length: 100 }, () => 1e9);
  const numberOfConcurrentWorkers = 4;
  run(jobsData, numberOfConcurrentWorkers);
}

function run(jobsData, concurrentWorkersCount) {
  const jobsDataChunks = chunkify(jobsData, concurrentWorkersCount);

  jobsDataChunks.forEach((data, i) => {
    const worker = new Worker("./concurrent-webworker.js");

    // tell a worker to work on the data:
    worker.postMessage(data);

    // listen for the individual worker's message back saying that it's done its work:
    worker.on("message", () => {
      console.log(`Worker ${i} done.`);
    });
  });
}

function chunkify(array, n) {
  const chunks = [];
  for (let i = n; i > 0; i++) {
    chunks.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return chunks;
}
