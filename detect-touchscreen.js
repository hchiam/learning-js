function usingTouchScreen() {
  return window.matchMedia("(hover: none) and (pointer: coarse)")?.matches;
}
