const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal }) // if abort is already called, fetch won't bother running and wasting resources
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log(text);
  });

// more here (like responding to abort): https://developers.google.com/web/updates/2017/09/abortable-fetch

// https://www.youtube.com/watch?v=BeZfiCPhZbI

// you can also write multiple removeEventListener calls more efficiently/cleanly:

const signal = AbortSignal.timeout(1000);

document.addEventListener('drag', ()=>{}, { signal });
document.addEventListener('dragend', ()=>{}, { signal });
document.addEventListener('dragstart', ()=>{}, { signal });
document.addEventListener('dragover', ()=>{}, { signal });

// and combine timeout abort with manually calling abort:

const controller = new AbortController();
const signal = AbortSignal.any(
  [
    controller.signal, // lets you manually abort
    AbortSignal.timeout(1000), // will abort after 1 second
  ]
);

document.addEventListener('drag', ()=>{}, { signal });
document.addEventListener('dragend', ()=>{}, { signal });
document.addEventListener('dragstart', ()=>{}, { signal });
document.addEventListener('dragover', ()=>{}, { signal });

controller.abort();

// also there's a built-in "abort" event listener:

signal.addEventListener('abort', ()=>{
  //...
});

// see abortableTransaction.js for a helper function
