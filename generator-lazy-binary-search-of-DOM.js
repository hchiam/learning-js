// https://www.youtube.com/watch?v=cLxNdLK--yI

for (let node of find(document)) {
  if (node.localName === "title") {
    console.log(node.textContent);
    break;
  }
}

function* find(node) {
  if (!node) return;
  yield node;
  yield* find(node.firstChild);
  yield* find(node.nextSibling);
}
