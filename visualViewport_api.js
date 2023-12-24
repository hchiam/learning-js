// https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API#accessing_the_api
// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433

var el = document.querySelector("#test");

visualViewport.addEventListener("scroll", handleVisualViewportChange);
visualViewport.addEventListener("resize", handleVisualViewportChange);

function handleVisualViewportChange(event) {
  const vvp = visualViewport; // event.target;
  /*console.log(
    Math.round(vvp.width),
    Math.round(vvp.height),
    Math.round(vvp.offsetLeft),
    Math.round(vvp.offsetTop)
  );*/
  if (el) console.log(isElementInVisualViewport(el));
}

function isElementInVisualViewport(el) {
  const vvp = visualViewport;
  const rect = el.getBoundingClientRect();
  const vvpBottom = vvp.offsetTop + vvp.height;
  const vvpRight = vvp.offsetLeft + vvp.width;
  return (
    rect.top < vvpBottom &&
    rect.bottom > vvp.offsetTop &&
    rect.left < vvpRight &&
    rect.right > vvp.offsetLeft
  );
}
