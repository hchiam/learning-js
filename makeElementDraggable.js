function makeElementDraggable(element, dragStopCallback) {
  let x = 0;
  let y = 0;
  element.onmousedown = dragOnMouseDown;
  // idea.style.all = "initial";
  element.style.position = "absolute";

  function dragOnMouseDown(event) {
    let e = event || window.event;
    e.preventDefault();
    x = e.clientX;
    y = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
    if (dragStopCallback) dragStopCallback(element.id);
  }

  function dragElement(event) {
    let e = event || window.event;
    e.preventDefault();
    const xChange = e.clientX - x;
    const yChange = e.clientY - y;
    x = e.clientX;
    y = e.clientY;
    element.style.left = element.offsetLeft + xChange + "px";
    element.style.top = element.offsetTop + yChange + "px";
  }
}

export default makeElementDraggable;
