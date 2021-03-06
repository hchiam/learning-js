// https://codepen.io/hchiam/pen/OJXoqaj

function makeElementDraggableAndEditable(element, disableStyleReset) {
  var mouseX = 0;
  var mouseY = 0;
  var detectAsClickToEdit = false;
  element.addEventListener("mousedown", dragOnMouseDown);
  element.addEventListener("blur", resetEditableOnBlur);
  if (!disableStyleReset || typeof disableStyleReset !== "boolean") {
    element.style.marginBlockStart = "initial";
    element.style.position = "absolute";
    element.style.minWidth = "1ch";
    element.style.minHeight = "1em";
  }

  function dragOnMouseDown(event) {
    var e = event || window.event;
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", dragElement);
    element.contentEditable = false;
    detectAsClickToEdit = true;
  }

  function stopDragging() {
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("mousemove", dragElement);
    if (detectAsClickToEdit) {
      element.contentEditable = true;
      element.focus();
      element.removeEventListener("mousedown", dragOnMouseDown);
    }
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
    detectAsClickToEdit = false;
  }

  function resetEditableOnBlur() {
    element.contentEditable = false;
    element.addEventListener("mousedown", dragOnMouseDown);
  }
}

export default makeElementDraggableAndEditable;
