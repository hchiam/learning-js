window.prettyBool = (expression) => {
  const parts = expression.replace(/[() ]/g, "").split(/[|&]{2}/);
  const partsMap = expression.split(/[^|&() ]+/);
  const partValues = parts.map(eval);
  const partsRemapped = [
    ...parts.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const valuesRemapped = [
    ...partValues.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const styles = valuesRemapped
    .map((x, i) => (i % 2 === 0 ? "background:black;color:lime;" : ""))
    .slice(0, -1);
  console.log("  " + partsRemapped.join("%c"), ...styles);
  console.log("= " + valuesRemapped.join("%c"), ...styles);
  console.log("= " + eval(expression));
};
console.log(
  'try this:\n%cx = false;\nprettyBool("true && (x || true)");',
  "background:black;color:lime;"
);
