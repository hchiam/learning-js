function moveElement(element, newParent) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(element);
  newParent.appendChild(fragment);
  // use fragment to avoid reflow that would happen with newParent.appendChild(element);
}
