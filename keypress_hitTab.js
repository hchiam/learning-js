function hitTab(event) {
  const key = event.key || event.code || event.keyCode || event.which || event;
  return key === "Tab" || key === 9;
}
