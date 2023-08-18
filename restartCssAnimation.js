function restartCssAnimation(element, animationClass) {
  element.classList.remove(animationClass);
  void element.offsetWidth; // trigger reflow - https://css-tricks.com/restart-css-animation/
  element.classList.add(animationClass);
}
