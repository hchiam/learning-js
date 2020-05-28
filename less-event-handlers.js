// https://gomakethings.com/vanilla-js-event-delegation-with-a-lot-of-event-handlers-on-one-page

var handleShowMe = function (event) {
  if (!event.target.matches(".show-me")) return;
  // event code here
};

var handleSaves = function (event) {
  if (!event.target.matches(".save")) return;
  // event code here
};

document.addEventListener("click", function (event) {
  handleShowMe(event);
  handleSaves(event);
});
