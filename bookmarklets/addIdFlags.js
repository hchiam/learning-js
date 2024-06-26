javascript: (function () {
  addFlags("[id]");

  let resizeTimer = null;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      addFlags("[id]");
    }, 500);
  });
  $('body').on('change', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      addFlags("[id]");
    }, 500);
  });

  function addFlags(jQuerySelectorString) {
    $("body").find(`[id^="bookmarklet-flag-"]`).remove();
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
          top += existingPositions[posKey];
          left += existingPositions[posKey];
        } else {
          existingPositions[posKey] = 1;
        }
        const id = el.prop("id");
        const randomColor =
          "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
        top = Math.round(top) + "px";
        left = Math.round(left) + "px";
        $("body").append(
          `<div id="bookmarklet-flag-${id}" title="${id}" style="background:black;box-shadow:0 0 5px 5px black;color:white;position:absolute;top:${top};left:${left};padding:1px;z-index:99999;transition:0.2s">${id}</div>`
        );
        styleString += `#${id}:not(:hover) { background: ${randomColor}; }
          body:has(#${id}:hover) #bookmarklet-flag-${id} { opacity:0;pointer-events:none; }
          [id]:hover #${id} #bookmarklet-flag-${id} { opacity:0;pointer-events:none; }
          #${id}:has(:hover) #bookmarklet-flag-${id} { opacity:0;pointer-events:none; }`;
        styleString += `#bookmarklet-flag-${id}:not(:hover) { outline:5px solid ${randomColor}; opacity:0.75; }
          #bookmarklet-flag-${id}:hover { opacity:0;pointer-events:none; } `;
      }
    });
    $("body").append(
      `<style id="bookmarklet-flag-style">${styleString}</style>`
    );
  }
})();
