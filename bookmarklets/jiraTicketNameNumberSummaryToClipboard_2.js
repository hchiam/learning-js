javascript: (function () {
  var parentIssueSummary = document.querySelector(
    `[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-parent-issue-container"]`
  );
  var matches = /(ABCD|TEAM|DEV|SAAS)-\d+/.exec(
    parentIssueSummary ? parentIssueSummary.innerText : ""
  );
  var parent = matches ? matches[0] : "";
  var ssTitle =
    (parent ? parent + " / " : "") +
    document.querySelector(
      `[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-parent-issue-container"]`
    ).innerText +
    " : " +
    document.querySelector(
      `[data-test-id="issue.views.issue-base.foundation.summary.heading"]`
    ).innerText;
  console.log(ssTitle);
  alert(`Copy this to your clipboard now: \n\n${ssTitle}`);
})();
