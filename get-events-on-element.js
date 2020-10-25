getEventsOnElement("#some_selector");

function getEventsOnElement(selector) {
  var haveJQuery = $() && $().jquery;
  if (haveJQuery) {
    clear();
    var element = $(selector);
    if (element) {
      var eventsObject = $._data(element[0], "events"); // this line requires jQuery
      console.log("vvv click to expand vvv");
      Object.keys(eventsObject).forEach(function (eventName) {
        console.groupCollapsed(
          "%cEvent Name:%c" + eventName,
          "color: lime; background: black;"
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
