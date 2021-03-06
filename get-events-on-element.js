function getEventsOnElement(selector) {
  var haveJQuery = typeof jQuery !== "undefined";
  if (haveJQuery) {
    var element = $(selector);
    if (element) {
      var eventsObject = $._data(element[0], "events"); // this line requires jQuery
      if (!eventsObject) return;
      console.log("vvv click to expand vvv");
      Object.keys(eventsObject).forEach(function (eventName) {
        console.groupCollapsed(
          "%cEvent:%c " + eventName,
          "color: lime; background: black;",
          ""
        );
        var subscribedEvents = eventsObject[eventName];
        subscribedEvents.forEach(function (event) {
          console.log(event.handler.toString());
        });
        console.groupEnd();
      });
    }
  }
}

// try it out on https://api.jquery.com

var selector = ".ds-input";

$(selector).click(() => {
  alert("hi");
});

$(selector).click(() => {
  // another registered event
  alert("hi");
});

getEventsOnElement(selector);
