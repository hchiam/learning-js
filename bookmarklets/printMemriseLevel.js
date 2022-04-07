javascript: (() => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>

.central-column > .things {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
  opacity: 1;
}

body {
  visibility: hidden;
}

.central-column {
  visibility: visible;
}

.central-column > .things img {
  height: 1rem;
  max-height: 1rem;
}

.things-header, .thinguser {
  display: none !important;
}

.thing {
  padding: 0;
}

.image {
  width: 100px !important;
}

</style>`
  );
  print();
})();
