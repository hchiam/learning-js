javascript: (() => {
  [...document.querySelectorAll("img")].map((img) => {
    img.style.filter = img.style.filter ? "" : "blur(2px)";
  });
})();
