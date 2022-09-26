/**
 * listen for print event, like Ctrl+P
 * https://stackoverflow.com/a/15662720
 */
function onPrint(callback, backupEventName = "beforeprint") {
  if ("matchMedia" in window) {
    window.matchMedia("print").addListener(function (media) {
      if (media.matches) {
        callback();
      } else {
        // fires immediately, so wait for 1st mouse movement
        $(document).one("mouseover", callback); // run just once
      }
    });
  } else {
    $(window).on(backupEventName, callback);
  }
}

function onBeforePrint(callback) {
  onPrint(callback, "beforeprint");
}

function onAfterPrint(callback) {
  onPrint(callback, "afterprint");
}
