animateElementSilhouettesWithSvgPaths($(".test"));

async function animateElementSilhouettesWithSvgPaths(jQueryElements) {
  const svgClass = "svg-animate-silhouette";

  $(`.${svgClass}`).remove();

  jQueryElements.each(async (i, element) => {
    const el = $(element);
    const borderRadius = Number( String(el.css("border-radius")).replace("px", "") );
    const w = el.outerWidth() - borderRadius;
    const h = el.outerHeight() - borderRadius;
    const top = el.offset().top + borderRadius / 2;
    const left = el.offset().left + borderRadius / 2;

    const svgStyle = `
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    `;

    const pathStyle = `
        fill: #4486f4;
        stroke: #4486f4;
        stroke-width: ${borderRadius};
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: d 0.2s, stroke-width 0.2s;
    `;

    $("body").append(`
        <svg class="${svgClass}" style="${svgStyle}" viewBox="0 0 ${window.innerWidth} ${window.innerHeight}">
            <path style="${pathStyle}" d="M${left},${top} A0,0 0 0 1 ${left + w},${top} A0,0 0 0 1 ${left + w},${top + h} A0,0 0 0 1 ${left},${top + h} A0,0 0 0 1 ${left},${top}"></path>
        </svg>
    `);

    const midX = Math.round(window.innerWidth / 2);
    const midY = Math.round(window.innerHeight / 2);
    const speed = 300;
    await goTo(midX, midY, speed * 3);
    await goTo(midX + 100, midY, speed);
    await goTo(midX + 100, midY + 100, speed);
    await goTo(midX, midY, speed);
  });

  async function goTo(x, y, delayInMs) {
    await sleep(delayInMs);
    $(`.${svgClass} path`)
      .css({
        "stroke-width": "30"
      })
      .attr(
        "d",
        `M${x},${y} A0,0 0 0 1 ${x},${y} A0,0 0 0 1 ${x},${y} A0,0 0 0 1 ${x},${y} A0,0 0 0 1 ${x},${y}`
      );
  }

  async function sleep(milliseconds) {
    await new Promise((r) => setTimeout(r, milliseconds || 1000));
  }
}
