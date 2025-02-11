// see more notes in https://github.com/hchiam/learning-js/blob/main/abort-fetch.js
function abortableTransaction(callbackThatReturnsAPromise, { signal, transaction }) {
  return transaction(data => {
    return new Promise((resolve,reject) => {
      // already aborted:
      if (signal.aborted) reject(new Error('reason'));
    
      // abort triggered:
      signal.addEventListener('abort', ()=>{
        reject(new Error());
      });
    
      // pass data/info along:
      return callback(data).then(resolve).catch(reject);
    });
  });
}
