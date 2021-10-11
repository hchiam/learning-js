// // example use:
// wrapWithScrollbarOnTopAndBottom(
//   $("#dont_select_div_but_select_this_table_instead")
// );

const defaultOptions = { stickyTop: false };

/**
 * (Note: assumes you have jQuery.)
 * Live demo: https://codepen.io/hchiam/pen/XWRLWNo
 */
function wrapWithScrollbarOnTopAndBottom(element, options = defaultOptions) {
  const { stickyTop, connectedElement } = options;
  const width = element.css("width");

  // wrap element in the bottom scrollbar wrapper:
  const bottomWrapperID = `bottom_scrollbar_wrapper_${Date.now()}`;
  const bottomWrapper = `<div id="${bottomWrapperID}" style="overflow:auto;"></div>`;
  element.wrap(bottomWrapper);

  // insert a top scrollbar wrapper before the bottom scrollbar wrapper:
  const topWrapperID = `top_scrollbar_wrapper_${Date.now()}`;
  const topWrapper = $(`<div id="${topWrapperID}" style="overflow:auto;${
    stickyTop ? "position:sticky;top:0;" : ""
  }">
  <div style="height:5px;width:${width};"></div>
</div>`);
  topWrapper.insertBefore(`#${bottomWrapperID}`);

  const otherWrapperID = `other_scrollbar_wrapper_${Date.now()}`;
  const otherWrapper = `<div id="${otherWrapperID}" style="overflow:hidden;"></div>`;
  if (connectedElement) connectedElement.wrap(otherWrapper);

  // make scrolling either wrapper trigger scrolling the other wrapper:
  const bottom = $(`#${bottomWrapperID}`);
  const top = $(`#${topWrapperID}`);
  const other = $(`#${otherWrapperID}`);
  $(`#${bottomWrapperID}, #${topWrapperID}, #${otherWrapperID}`).scroll(
    function () {
      const wrapper = $(this);
      const scroll = wrapper.scrollLeft();
      if (wrapper !== bottom) bottom.scrollLeft(scroll);
      if (wrapper !== top) top.scrollLeft(scroll);
      if (wrapper !== other) other.scrollLeft(scroll);
    }
  );

  return element;
}
