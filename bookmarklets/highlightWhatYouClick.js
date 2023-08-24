javascript: (function () {
  window.highlightWhatYouClick = window.highlightWhatYouClick
    ? !window.highlightWhatYouClick
    : true;
  window.enableClickWhileRunningThisBookmarklet = false;
  console.log("enableClickWhileRunningThisBookmarklet = false");
  [...document.querySelectorAll("*")].forEach((x) =>
    x.addEventListener("click", function (e) {
      if (!window.enableClickWhileRunningThisBookmarklet) e.stopPropagation();
      if (window.highlightWhatYouClick) {
        x.style.background = "gold";
        x.style.color = "black";
      }
    })
  );
})();
