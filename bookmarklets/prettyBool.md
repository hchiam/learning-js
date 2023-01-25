<!-- View on GitHub to get the convenient copy-to-clipboard button: -->

# Hover over the code to see the copy-to-clipboard button:

![animation showing how to hover to get the copy-to-clipboard button](copy-code-to-clipboard.gif)

```js
javascript:(function(){
prettyBool = (expression) => {
  const parts = expression
    .replace(%2F %2Fg, %22%22)
    .split(%2F[|&]{2}%2F)
    .map((p) => {
      const open = (p.match(%2F\(%2Fg) || []).length;
      const close = (p.match(%2F\)%2Fg) || []).length;
      const diff = Math.abs(open - close);
      if (open > close) {
        return p.slice(diff, p.length);
      } else if (close > open) {
        return p.slice(0, p.length - diff);
      } else {
        return p;
      }
    });
  const partsMap = expression.split(%2F\)*[^|&() ]+\(*%2F);
  const partValues = parts.map(eval);
  const partsRemapped = [
    ...parts.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const valuesRemapped = [
    ...partValues.map((v, i) => [partsMap[i], v]).flat(),
    partsMap.slice(-1)[0],
  ];
  const style = %22background:black;color:lime;%22;
  const styles = valuesRemapped
    .map((x, i) => (i %25 2 === 0 ? style : %22%22))
    .slice(0, -1);
  console.log(%22  %22 + partsRemapped.join(%22%25c%22), ...styles);
  console.log(%22= %22 + valuesRemapped.join(%22%25c%22), ...styles);
  console.log(%22= %25c%22 + eval(expression), style);
};
console.log(
  'try this:\n%25cx = false;\nfunction test(x) {return false};\nprettyBool(%22(true && (x || test(true)))%22);',
  %22background:black;color:lime;%22
);

})();
```

https://github.com/hchiam/learning-js/blob/main/bookmarklets/prettyBool.js
