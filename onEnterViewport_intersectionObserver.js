function onEnterViewport(element, callback, options) {
  if (!IntersectionObserver) return;

  // if (!options) options = { threshold: [0, 1] };
  var observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);

  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (typeof callback === "function") {
        callback(entry.intersectionRatio, observer);
      }
    });
  }
}
