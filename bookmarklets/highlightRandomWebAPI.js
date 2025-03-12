javascript: (() => {
  const url = "https://developer.mozilla.org/en-US/docs/Web/API";
  if (location.href !== url) {
    location.href = url;
    return;
  }
  const links = document.querySelectorAll("article a");
  [...links].map((link) => {
    if (link.parentElement) {
      link.parentElement.style.background = "";
    }
  });
  const i = Math.round(Math.random() * (links.length - 1));
  if (links[i].parentElement) {
    links[i].parentElement.style.background = "yellow";
  }
  links[i].scrollIntoView();
  setTimeout(() => {
    window.scrollTo({
      top: window.scrollY - 100,
      behavior: "smooth",
    });
  }, 1000);
})();
