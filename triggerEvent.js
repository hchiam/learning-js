/*
https://stackoverflow.com/questions/20567748/how-to-trigger-a-onmousedown-event-manually-from-javascript-not-jquery-on-a-em

just something like
$('.test').dispatchEvent(new Event('click'));
or
document.dispatchEvent(new Event('mousedown'));
document.dispatchEvent(new Event('click'));

or:
*/

// https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript

// triggerEvent(element, "keypress", { key: "a" });

function triggerEvent(element, eventName = "", data) {
  if (!element || !eventName) return;
  var event;
  if (document.createEvent) {
    event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, true, true);
    event.eventName = eventName;
    if (eventName.includes("key")) {
      console.log(element, eventName, data);
      element.dispatchEvent(new KeyboardEvent("keypress", data));
    } else {
      element.dispatchEvent(event);
    }
  } else {
    event = document.createEventObject();
    event.eventName = eventName;
    event.eventType = eventName;
    element.fireEvent("on" + event.eventType, event);
  }
}
