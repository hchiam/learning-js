javascript: (function () {
  var selector = prompt("jQuery selector?");
  $(selector).each(function () {
    var events = $._data($(this).get(0), "events");
    if (!events) {
      console.log(
        "(no jQuery events found on %c" + selector + "%c)",
        "color: lime; background: black;",
        ""
      );
      return;
    }
    var eventNames = Object.keys(events);
    console.log(events);
    eventNames.map(function (eventName) {
      events[eventName].map(function (listener) {
        var namespace = listener.namespace ? "." + listener.namespace : "";
        console.groupCollapsed(
          "%c" + eventName + namespace + "%c: \n↳ handler.toString()",
          "color: lime; background: black;",
          ""
        );
        console.log(listener.handler.toString());
        console.groupEnd();
        console.log(listener.handler);
      });
    });
  });
})();
