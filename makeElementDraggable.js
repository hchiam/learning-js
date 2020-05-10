function makeElementDraggable(element) {
  let x = 0;
  let y = 0;
  element.onmousedown = dragOnMouseDown;
  // idea.style.all = "initial";
  element.style.position = "absolute";

  function dragOnMouseDown(event) {
    const event = event || window.event;
    event.preventDefault();
    x = event.clientX;
    y = event.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function dragElement(event) {
    const event = event || window.event;
    event.preventDefault();
    const xChange = event.clientX - x;
    const yChange = event.clientY - y;
    x = event.clientX;
    y = event.clientY;
    element.style.left = element.offsetLeft + xChange + "px";
    element.style.top = element.offsetTop + yChange + "px";
  }
}

export default makeElementDraggable;
