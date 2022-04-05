function hitArrowLeft(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "ArrowLeft" || key === 37;
}

function hitArrowUp(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "ArrowUp" || key === 38;
}

function hitArrowRight(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "ArrowRight" || key === 39;
}

function hitArrowDown(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "ArrowDown" || key === 40;
}
