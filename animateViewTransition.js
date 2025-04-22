async function animateViewTransition(elements, callback) {
  if (document.startViewTransition) {
    const transition = document.startViewTransition(() => callback());
    await transition.finished;
  } else {
    const animations = elements.map((el) =>
      el.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(0.95)" },
        ],
        {
          duration: 200,
          easing: "ease-out",
        }
      )
    );
    await Promise.all(animations.map((animation) => animation.finished));
    callback();
  }
}
