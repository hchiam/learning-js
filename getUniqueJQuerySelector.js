/**
 * * inspired by https://stackoverflow.com/questions/5728558/get-the-dom-path-of-the-clicked-a
 * */
export function getUniqueJQuerySelector(element) {
  let selectorParts = [];
  element
    .parents()
    .addBack()
    .not("html")
    .each(function () {
      let entry = "";
      const tagName = this.tagName.toLowerCase();
      const id = this.id.trim();
      const className = this.className.trim();

      entry += tagName;

      if (id) {
        selectorParts = [];
        entry = "#" + id;
      } else if (className) {
        entry += "." + className.replace(/ +/g, ".");
      }

      // to ensure uniqueness, account for siblings with the same tag name:
      if (!id && $(this).siblings(tagName).length > 1) {
        let count = 1;
        const currentEl = $(this);
        currentEl.prevAll(tagName).each(function () {
          const currentSibling = $(this);
          if (currentSibling !== currentEl) {
            count++;
          }
        });
        entry += `:nth-of-type(${count})`;
      }

      selectorParts.push(entry);
    });
  return selectorParts.join(" ");
}
