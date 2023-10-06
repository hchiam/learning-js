javascript: (function () {
  var breadcrumbs = document
    .querySelector('[aria-label="Breadcrumbs"]')
    .innerText.split("\n")
    .filter((x) => x.match(/-\d/))
    .join(" / ");
  var summaryDescription = document.querySelector("h1").innerText;
  var ssTitle = breadcrumbs + " : " + summaryDescription;
  console.log(ssTitle);
  copy(ssTitle);
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
    alert(`Copied to clipboard:\n\n${text}`);
  }
})();
