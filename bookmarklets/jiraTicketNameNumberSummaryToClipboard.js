javascript: (function () {
  var parent = /(ABCD|TEAM|DEV|SAAS)-\d+/.exec(
    document.querySelector("#parent_issue_summary")?.innerText
  )?.[0];
  var ssTitle =
    (parent ? parent + " / " : "") +
    document.querySelector("#key-val").innerText +
    " : " +
    document.querySelector("#summary-val").innerText;
  console.log(ssTitle);
  var textarea = document.createElement("textarea");
  selection = document.getSelection();
  textarea.textContent = ssTitle;
  document.body.appendChild(textarea);
  selection.removeAllRanges();
  textarea.select();
  document.execCommand("copy");
  selection.removeAllRanges();
  document.body.removeChild(textarea);
  alert(ssTitle);
})();
