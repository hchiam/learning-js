function askBeforeUnloadPage(shouldAskCallback) {
  window.addEventListener("beforeunload", (event) => {
    // TODO: promises: https://dev.to/chromiumdev/sure-you-want-to-leavebrowser-beforeunload-event-4eg5
    if (shouldAskCallback && !shouldAskCallback()) return;

    // https://stackoverflow.com/a/19538231
    let confirmationMessage = "o/";
    (event || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Webkit, Safari, Chrome
  });
}
