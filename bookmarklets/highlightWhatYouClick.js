javascript: (function () {
  window.enableClickWhileRunningThisBookmarklet = false;
  console.log("enableClickWhileRunningThisBookmarklet = false");
  [...document.querySelectorAll("*")].forEach((x) =>
    x.addEventListener("click", function (e) {
      if (!window.enableClickWhileRunningThisBookmarklet) e.stopPropagation();
      x.style.background = "gold";
      x.style.color = "black";
    })
  );
})();
