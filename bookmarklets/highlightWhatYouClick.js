javascript: (function () {
  [...$("*")].forEach((x) =>
    x.addEventListener("click", function (e) {
      e.stopPropagation();
      x.style.background = "gold";
      x.style.color = "black";
    })
  );
})();
