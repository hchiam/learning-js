function hitEnter(event) {
  var key = event || event.key || event.code || event.keyCode || event.which;
  return key === 13 || key === "Enter";
}
