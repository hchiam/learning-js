function onEnterViewport(element, callback, options) {
  if (!IntersectionObserver) return;

  // if (!options) options = { threshold: [0, 1] };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (typeof callback === "function") {
        callback(entry.intersectionRatio, observer);
      }
    });
  }
}
