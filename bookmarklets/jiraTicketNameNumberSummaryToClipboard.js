javascript: (function () {
  var parentIssueSummary = document.querySelector("#parent_issue_summary");
  var matches = /(ABCD|TEAM|DEV|SAAS)-\d+/.exec(
    parentIssueSummary ? parentIssueSummary.innerText : ""
  );
  var parent = matches ? matches[0] : "";
  var ssTitle =
    (parent ? parent + " / " : "") +
    document.querySelector("#key-val").innerText +
    " : " +
    document.querySelector("#summary-val").innerText;
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
