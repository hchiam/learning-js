/**
 * Requires jQuery.
 * Demo: https://codepen.io/hchiam/pen/dydxyNG?editors=0010
 */
function makeHeaderRespondToScroll(selector, showWhenHitBottom = true) {
  let prevScrollpos = window.pageYOffset;
  const height = document.querySelector("header").offsetHeight;

  document.querySelector("header").style.position = "fixed";
  document.querySelector("header").style.top = 0;

  $(window).scroll(function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // scrolling up, so show:
      document.querySelector("header").style.top = "0";
    } else if (
      showWhenHitBottom &&
      $(window).scrollTop() + $(window).height() === $(document).height()
    ) {
      // hit bottom of page, so show:
      document.querySelector("header").style.top = "0";
    } else {
      // scrolling down, so hide:
      document.querySelector("header").style.top = "-" + height + "px";
    }
    prevScrollpos = currentScrollPos;
  });
}
