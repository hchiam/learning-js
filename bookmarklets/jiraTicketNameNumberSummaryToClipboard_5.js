javascript: (() => {
  var parent = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.parent-issue.item"]'
  )?.innerText;
  var current = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
  )?.innerText;
  var isSubtask = document
    .querySelector(
      '[data-testid="issue.views.issue-base.foundation.change-issue-type.button"]'
    )
    .ariaLabel.startsWith("Sub-task - ");
  var tickets = isSubtask ? parent + " / " + current : current;
  var summaryDescription = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.summary.heading"]'
  ).innerText;
  var ssTitle = tickets + " : " + summaryDescription;
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
