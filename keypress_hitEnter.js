function hitEnter(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "Enter" || key === "ENTER" || key === 13;
}
