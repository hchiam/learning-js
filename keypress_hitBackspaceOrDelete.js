function hitBackspaceOrDelete(event) {
  const key = event.key || event.code || event.keyCode || event.which || event;
  return key === "Backspace" || key === "Delete" || key === 8 || key === 46;
}
