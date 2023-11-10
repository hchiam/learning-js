// $ = document.querySelectorAll; won't work
$ = document.querySelectorAll.bind(document);
