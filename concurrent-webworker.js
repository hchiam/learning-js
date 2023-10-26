// https://www.youtube.com/watch?v=-JE8P2TiJEg
// https://nodejs.org/api/worker_threads.html

const { parentPort } = require("worker_threads");

// listen for parent to message a worker:
parentPort.on("message", (jobData) => {
  // do some slow work:
  someSlowWork(jobData);

  // tell parent who called this web worker that this individual worker's work is done:
  parentPort.postMessage("done");
});

function someSlowWork(jobData) {
  for (let data of jobData) {
    let count = 0;
    for (let i = 0; i < data; i++) {
      count++;
    }
  }
}
