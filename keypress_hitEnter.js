function hitEnter(event) {
  var key = event || event.key || event.code || event.keyCode || event.which;
  return key === "Enter" || key === "ENTER" || key === 13;
}
