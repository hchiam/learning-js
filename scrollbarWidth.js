/** based off of https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript */
function getScrollbarWidth(container = document.body) {
  const invisibleParent = document.createElement('div');
  invisibleParent.style.visibility = 'hidden';
  invisibleParent.style.overflow = 'scroll'; // force scrollbar to appear
  invisibleParent.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  container.appendChild(invisibleParent);
  
  const child = document.createElement('div');
  invisibleParent.appendChild(child);
  
  const scrollbarWidth = invisibleParent.offsetWidth - child.offsetWidth;
  
  invisibleParent.parentNode.removeChild(invisibleParent);
  
  return scrollbarWidth;
}
