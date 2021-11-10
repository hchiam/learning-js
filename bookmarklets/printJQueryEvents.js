javascript: (function () {
  var selector = prompt("jQuery selector?");
  $(selector).each(function () {
    console.log($._data($(this).get(0), "events"));
  });
})();
