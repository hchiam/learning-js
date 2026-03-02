javascript: (() => {
  [...document.querySelectorAll("body *")].map((x) => {
    x.style.transition = "5s transform";
    x.style.transform = "rotate(100deg) scale(0.25)";
  });
  setTimeout(() => {
    [...document.querySelectorAll("body *")].map((x) => {
      x.style.transformOrigin = "center";
      x.style.transition = "7s transform";
      x.style.transform = "rotate(300deg) scale(3)";
    });
  }, 5000);
})();
