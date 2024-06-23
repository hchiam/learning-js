function animationsDone(element) {
  // allSettled = all resolved/rejected
  return Promise.allSettled(element.getAnimations().map(animation => animation.finished));
}
