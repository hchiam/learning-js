// run this in the browser console, and it'll copy the results to your clipboard:
copy(
  $$('[class^="card-wrapper"] [class^="content"]').map((x) =>
    x.innerText.trim()
  )
);
