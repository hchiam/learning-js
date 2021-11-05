javascript: (function () {
  var textarea = document.createElement("textarea");
  selection = document.getSelection();
  textarea.textContent = "for (let i = 0; i < array.length; i++)";
  document.body.appendChild(textarea);
  selection.removeAllRanges();
  textarea.select();
  document.execCommand("copy");
  selection.removeAllRanges();
  document.body.removeChild(textarea);
})();
