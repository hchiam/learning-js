// WON'T WORK DUE TO CROSS-ORIGIN IFRAME:

// javascript: console.log(
//   Array.from(
//     document.querySelectorAll('[class^="card-wrapper"] [class^="content"]')
//   ).map((x) => x.innerText.trim())
// );

/**
 * but you can run this as a snippet instead:
 *
 *    $$('[class^="card-wrapper"] [class^="content"]').map((x) => x.innerText.trim());
 */
