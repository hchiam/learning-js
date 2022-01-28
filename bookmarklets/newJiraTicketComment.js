javascript: (() => {
  $("#footer-comment-button").click();
  const linkText = prompt("Enter some link text:").trim();
  const link =
    "https://github.com/hchiam/learning-js/blob/main/bookmarklets/newJiraTicketComment.js";
  setTimeout(function () {
    $("textarea#comment").val(`[${linkText}|${link}]: \n* `);
  }, 1000);
})();
