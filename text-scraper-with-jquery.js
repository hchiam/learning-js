// copy and paste this into browser DevTools console:
var ht = {};
$("body")
  .find(":visible:not(iframe):not(script)")
  .contents()
  .filter(function () {
    return this.nodeType === Node.TEXT_NODE;
  })
  .each(function () {
    const el = $(this);
    const text = el.text().trim();
    if (text) {
      if (text in ht) {
        el.parent()[0].style.setProperty("background", "blue", "important");
        el.parent()[0].style.setProperty("color", "white", "important");
      } else {
        ht[text] = { element: el };
        el.parent()[0].style.setProperty("background", "red", "important");
        el.parent()[0].style.setProperty("color", "black", "important");
      }
    }
  })
  .ready(() => {
    console.log(ht);
    alert(`BLUE = duplicates
RED = texts found (${Object.keys(ht).length})`);
  });
