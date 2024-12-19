const $$ = (x) => [...document.querySelectorAll(x)];
const visibleVideos = $$("video").filter((x) =>
  x.checkVisibility({ opacityProperty: true, visibilityProperty: true })
);
