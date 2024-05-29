// $ = document.querySelectorAll; won't work
$ = document.querySelectorAll.bind(document);

// or even shorter:
s = s => document.querySelectorAll(s);
