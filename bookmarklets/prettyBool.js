prettyBool = (expression) => {
  const parts = expression
    .replace(/ /g, "")
    .split(/[|&]{2}/)
    .map((p) => {
      const open = (p.match(/\(/g) || []).length;
      const close = (p.match(/\)/g) || []).length;
      const diff = Math.abs(open - close);
      if (open > close) {
        return p.slice(diff, p.length);
      } else if (close > open) {
        return p.slice(0, p.length - diff);
      } else {
        return p;
      }
    });
  const partsMap = expression.split(/\)*[^|&() ]+\(*/);
  const partValues = parts.map(eval);
  const partsRemapped = [
    ...parts.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const valuesRemapped = [
    ...partValues.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const style = "background:black;color:lime;";
  const styles = valuesRemapped
    .map((x, i) => (i % 2 === 0 ? style : ""))
    .slice(0, -1);
  console.log("  " + partsRemapped.join("%c"), ...styles);
  console.log("= " + valuesRemapped.join("%c"), ...styles);
  console.log("= %c" + eval(expression), style);
};
console.log(
  'try this:\n%cx = false;\nfunction test(x) {return false};\nprettyBool("(true && (x || test(true)))");',
  "background:black;color:lime;"
);
