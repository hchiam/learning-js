/**
Example usage:

const iom = new IntersectionObserverManager(callback, {threshold:[0,0.5,1]});

elements.forEach(element => {
  iom.observe(element);
});

function callback(entry, observer) {
  if (entry.intersectionRatio > 0) {
    // do something
    observer.unobserve(entry.target);
  }
}
*/
function IntersectionObserverManager(callback, options) {
  this.observer = null;

  if (IntersectionObserver && !this.observer) {
    this.observer = new IntersectionObserver(handleIntersect, options);
  }

  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (typeof callback === "function") {
        callback(entry, observer);
      }
    });
  }

  this.observe = function (element) {
    if (this.observer) this.observer.observe(element);
  };
}

/**
 * Demo: https://codepen.io/hchiam/pen/MWXYrKv?editors=0010
 */
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
