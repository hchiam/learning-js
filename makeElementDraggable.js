function makeElementDraggable(element, disableStyleReset) {
  var mouseX = 0;
  var mouseY = 0;
  element.addEventListener("mousedown", dragOnMouseDown);
  if (!disableStyleReset) {
    element.style.marginBlockStart = "initial";
    element.style.position = "absolute";
  }

  function dragOnMouseDown(event) {
    var e = event || window.event;
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", dragElement);
  }

  function stopDragging() {
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("mousemove", dragElement);
  }

  function dragElement(event) {
    element.focus();
    var e = event || window.event;
    e.preventDefault();
    const xChange = e.clientX - mouseX;
    const yChange = e.clientY - mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    element.style.left = element.offsetLeft + xChange + "px";
    element.style.top = element.offsetTop + yChange + "px";
  }
}

export default makeElementDraggable;
