const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal }).then(response => {
  return response.text();
}).then(text => {
  console.log(text);
});

// more here (like responding to abort): https://developers.google.com/web/updates/2017/09/abortable-fetch
