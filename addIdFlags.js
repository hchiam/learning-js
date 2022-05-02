addIdFlags("[id]");

function addIdFlags(jQuerySelectorString) {
  let styleString = "";
  const existingPositions = {};
  $(jQuerySelectorString).each(function () {
    const el = $(this);
    const offset = el.offset();
    if (offset) {
      let { top, left } = offset;
      const posKey = top + " " + left;
      if (posKey in existingPositions) {
        const offsetMore = 6;
        existingPositions[posKey] += offsetMore;
        top = existingPositions[posKey];
        left = existingPositions[posKey];
      }
      existingPositions[posKey] = 1;
      const id = el.prop("id");
      const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      top = Math.round(top) + "px";
      left = Math.round(left) + "px";
      el.after(
        `<div style="outline:5px solid ${randomColor};background:black;color:white;opacity:0.75;position:absolute;top:${top};left:${left};padding:1px;">${id}</div>`
      );
      styleString += `#${id}:not(:hover) { background: ${randomColor}; } `;
    }
  });
  $("body").append(`<style>${styleString}</style>`);
}
