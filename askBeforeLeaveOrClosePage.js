function askBeforeUnloadPage(shouldAskCallback) {
  window.addEventListener("beforeunload", (e) => {
    // TODO: promises: https://dev.to/chromiumdev/sure-you-want-to-leavebrowser-beforeunload-event-4eg5
    if (shouldAskCallback?.()) return;

    // https://stackoverflow.com/a/19538231
    let confirmationMessage = "o/";
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Webkit, Safari, Chrome
  });
}
