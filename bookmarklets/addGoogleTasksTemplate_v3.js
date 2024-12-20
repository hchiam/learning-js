javascript: (() => {
  const template =
    "9-10\n10-11\n11-12\n12-1 LUNCH\n1-2\n2-3\n3-4\n4-5\n5-6\n6-7 DINNER\n7-8\n8-9"; /* each new line will create a new task (non-nested) when pasted */
  copy(template);
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
    alert(
      `Each new line will create a new task (non-nested) when pasted:\n\nCopied to clipboard:\n\n${text}`
    );
  }
})();
