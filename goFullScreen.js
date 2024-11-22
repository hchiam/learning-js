document.body.addEventListener("click", (event) => {
  // requestFullscreen must be called within an event, not called top-level
  document.body.requestFullscreen();
  // to undo: (WITHOUT body!)
  // document.exitFullscreen();
});
