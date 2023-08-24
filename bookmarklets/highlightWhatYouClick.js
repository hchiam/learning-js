javascript: (function () {
  window.highlightWhatYouClick = !window.highlightWhatYouClick;
  console.log("Run again to toggle.");
  [...document.querySelectorAll("*")].forEach((x) =>
    x.addEventListener("click", function (e) {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        x.style.background = "gold";
        x.style.color = "black";
      }
    })
  );
})();
