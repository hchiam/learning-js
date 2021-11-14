// WON'T WORK DUE TO CROSS-ORIGIN IFRAME:

// javascript: console.log(
//   Array.from(
//     document.querySelectorAll('[class^="card-wrapper"] [class^="content"]')
//   ).map((x) => x.innerText.trim())
// );

/**
 * but you can run this as a Chrome snippet instead: https://developer.chrome.com/docs/devtools/javascript/snippets/
 *
 *    $$('[class^="card-wrapper"] [class^="content"]').map((x) => x.innerText.trim());
 */

javascript: (function () {
  console.log(
    `You might have to run %25c$$('[class^="card-wrapper"] [class^="content"]').map((x) => x.innerText.trim());`,
    "font-family:monospace;background:black;color:lime;"
  );
  console.log(
    Array.from(
      document.querySelectorAll('[class^="card-wrapper"] [class^="content"]')
    ).map((x) => x.innerText.trim())
  );
})();
