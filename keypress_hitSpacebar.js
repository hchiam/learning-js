function hitSpacebar(event) {
  var key = event || event.key || event.code || event.keyCode || event.which;
  return key === " " || key === "Spacebar" || key === 32;
}
