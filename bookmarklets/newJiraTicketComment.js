javascript: (() => {
  $("#footer-comment-button").click();
  setTimeout(function () {
    $("textarea#comment").val("Some boilerplate text: ");
  }, 1000);
})();
