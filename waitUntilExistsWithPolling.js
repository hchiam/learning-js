/**
 * Use this as a last resort.
 * Reference: https://stackoverflow.com/a/16149679
 * Or use: MutationObserver, but that'd be expensive.
 */
function waitUntilExistsWithPolling(
  selectorString,
  callback,
  pollingTimeMS = 100,
  maxTries = 10
) {
  var tries = 0;
  var checkExistsTimer = setInterval(function () {
    tries++;
    if (tries > maxTries) {
      clearInterval(checkExistsTimer);
    } else {
      var elements = document.querySelectorAll(selectorString);
      if (elements) {
        callback(elements);
        clearInterval(checkExistsTimer);
      }
    }
  }, pollingTimeMS);
}
