// (make sure to enable the popup)

var test = (function () {
  // test media queries by auto-resizing window
  var keepGoing = true;
  var popup;
  var maxWidth = screen.width;
  var minWidth = 152;
  var goWider = true;

  openPopup();
  go();

  popup.onbeforeunload = function () {
    stop();
    console.log("stopped timer");
  };
  function openPopup() {
    popup = window.open(
      location.href,
      "_blank",
      "width=100, top=0, left=0"
    ); /* , height=100"); */
  }
  function wider() {
    popup.resizeBy(5, 0);
  }
  function thinner() {
    popup.resizeBy(-5, 0);
  }
  function stop() {
    keepGoing = false;
  }
  function go() {
    keepGoing = true;
    console.log("starting in 3 seconds");
    popup.focus();
    setTimeout(function () {
      scanWidths();
      console.log("test.stop() to stop, and \ntest.go() to continue");
    }, 3000);
  }
  function scanWidths() {
    var timer = setInterval(function () {
      if (!keepGoing) {
        clearTimeout(timer);
        popup.focus();
      }
      if (maxWidth <= popup.outerWidth) {
        goWider = false;
      } else if (popup.outerWidth <= minWidth) {
        goWider = true;
      }
      if (goWider) {
        wider();
      } else {
        thinner();
      }
    }, 100);
  }

  // make available outside the IIFE:
  return { stop, go, popup };
})();

if (typeof window !== "undefined") window.test = test;
if (typeof module !== "undefined") module.test = test;
