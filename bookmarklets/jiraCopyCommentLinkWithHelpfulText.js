$$("body")[0].addEventListener("click", async (e) => {
  if (e.target.matches('span[aria-label="Copy link to comment"]')) {
    const text =
      "notes + before/after screenshots: " +
      (await navigator.clipboard.readText());
    copy(text);
  }
});
function copy(text) {
  var textarea = document.createElement("textarea");
  selection = document.getSelection();
  textarea.textContent = text;
  document.body.appendChild(textarea);
  selection.removeAllRanges();
  textarea.select();
  document.execCommand("copy");
  selection.removeAllRanges();
  document.body.removeChild(textarea);
  console.log(`Copied to clipboard:\n\n${text}`);
  alert(`Copied to clipboard:\n\n${text}`);
}
