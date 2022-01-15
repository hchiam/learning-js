javascript: (function () {
  $("input[type=%22text%22]:visible").val("test");
  $("input[type=%22radio%22]:visible").prop("checked", true);
  $("input[type=%22checkbox%22]:visible").prop("checked", true);
  $("input[type=%22email%22]:visible").val("test@example.com");
  $("select:visible").each(function () {
    var s = $(this);
    s.val(s.find("option:last-of-type").val());
  });
})();
