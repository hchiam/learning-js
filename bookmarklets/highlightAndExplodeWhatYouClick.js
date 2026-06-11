javascript: (() => {
  window.explodeWhatYouClick = !window.explodeWhatYouClick;
  console.log("Run again to toggle.");
  if (window.__explodeSetup) return;
  window.__explodeSetup = true;

  const DURATION_MS = 1500;
  const MAX_SCALE = 4;
  const MAX_DISPLACEMENT_SCALE = 300;
  const FILTER_MARGIN_PERCENT = 100;

  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const el = (name, attrs) => {
    const node = document.createElementNS(SVG_NAMESPACE, name);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    return node;
  };

  const svg = el("svg", { width: 0, height: 0, "aria-hidden": "true" });
  svg.style.position = "absolute";
  /* oversized filter region so displaced pixels aren't clipped at element's box */
  const filter = el("filter", {
    id: "explode-filter",
    x: `-${FILTER_MARGIN_PERCENT}%`,
    y: `-${FILTER_MARGIN_PERCENT}%`,
    width: `${2 * FILTER_MARGIN_PERCENT + 100}%`,
    height: `${2 * FILTER_MARGIN_PERCENT + 100}%`,
  });
  const feTurbulence = el("feTurbulence", {
    type: "turbulence",
    baseFrequency: 0.08,
    numOctaves: 2,
    seed: 3,
  });
  const feDisplacementMap = el("feDisplacementMap", {
    in: "SourceGraphic",
    scale: 0,
  });
  filter.append(feTurbulence, feDisplacementMap);
  svg.append(filter);
  document.body.append(svg);

  let busy = false; /* 1 explosion at a time because shared filter node */

  const explode = (x) => {
    busy = true;
    x.style.outline = "";
    x.style.pointerEvents = "none";
    if (getComputedStyle(x).display === "inline") {
      x.style.display = "inline-block";
    }
    x.style.filter = "url(#explode-filter)";
    const start = performance.now();
    const frame = (now) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const ease = 1 - (1 - t) ** 3; /* easeOutCubic */
      feDisplacementMap.setAttribute("scale", MAX_DISPLACEMENT_SCALE * ease);
      x.style.transform = `scale(${1 + (MAX_SCALE - 1) * ease})`;
      x.style.opacity = 1 - ease;
      if (t < 1) {
        /* before 100% */
        requestAnimationFrame(frame);
      } else {
        x.style.display = "none";
        x.style.filter = "";
        feDisplacementMap.setAttribute("scale", 0);
        busy = false;
      }
    };
    requestAnimationFrame(frame);
  };

  document.addEventListener(
    "click",
    (e) => {
      if (!window.explodeWhatYouClick || busy) return;
      e.preventDefault();
      e.stopPropagation();
      explode(e.target);
    },
    true
  );

  document.addEventListener(
    "mouseover",
    (e) => {
      if (!window.explodeWhatYouClick || busy) return;
      e.target.dataset.prevOutline = e.target.style.outline || "";
      e.target.style.outline = "solid 3px gold";
    },
    true
  );

  document.addEventListener(
    "mouseout",
    (e) => {
      if (!window.explodeWhatYouClick) return;
      e.target.style.outline = e.target.dataset.prevOutline || "";
    },
    true
  );
})();
