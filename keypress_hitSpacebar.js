function hitSpacebar(event) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === " " || key === "Spacebar" || key === 32;
}
