javascript: (function () {
  window.highlightWhatYouClick = !window.highlightWhatYouClick;
  console.log("Run again to toggle.");
  [...document.querySelectorAll("*")].forEach((x) => {
    x.addEventListener("click", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        if (x.style.background !== "gold") {
          x.style.background = "gold";
          x.style.color = "black";
          x.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
        } else {
          x.style.background = "";
          x.style.color = "";
        }
      }
    });
    let outline = x.style.outline;
    x.addEventListener("mouseover", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        x.style.outline = "solid 3px gold";
      }
    });
    x.addEventListener("mouseout", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        x.style.outline = outline;
      }
    });
  });
  function getScrollParent(node) {
    if (node === null) return null;
    if (node.scrollHeight > node.clientHeight) {
      return node;
    } else {
      return getScrollParent(node.parentNode);
    }
  }
})();
