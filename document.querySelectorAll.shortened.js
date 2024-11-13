// $ = document.querySelectorAll; won't work
$$ = document.querySelectorAll.bind(document);

// or even shorter:
$$ = s => [...document.querySelectorAll(s)];

$ = s => document.querySelector(s);
