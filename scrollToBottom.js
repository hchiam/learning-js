/** https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page */
function scrollToBottom(element) {
  if (element) {
    // element.scrollTo(0, element.scrollHeight);
    element.scrollTo({ top: element.scrollHeight, behavior: "instant" });
  } else {
    // window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" });
    // if you use jQuery $(document).scrollTop($(document).height()); then scroll speed is controlled by user a11y settings
  }
}
