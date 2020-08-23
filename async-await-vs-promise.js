tryAsyncAwait();
tryPromise();

async function tryAsyncAwait() { 
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const json = await response.json();
  console.log(json.map(x=>x.title));
  // note: canNOT do await fetch(...).json();
};

function tryPromise() { 
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => console.log(data.map(x=>x.title)));
  // downside: you're already nesting things inside .then
};
