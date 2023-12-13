javascript: (() => {
  const href = "https://unpkg.com/open-props";
  const link = Object.assign(document.createElement("link"), {
    rel: "stylesheet",
    href: href,
  });
  document.head.append(link);
})();
