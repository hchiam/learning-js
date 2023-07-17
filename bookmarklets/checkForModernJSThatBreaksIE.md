<!-- View on GitHub to get the convenient copy-to-clipboard button: -->

# Hover over the code to see the copy-to-clipboard button:

![animation showing how to hover to get the copy-to-clipboard button](copy-code-to-clipboard.gif)

```js
javascript:(function(){
checkForModernJSThatBreaksIE(%22targetJsFileName%22);

function checkForModernJSThatBreaksIE(targetJsFileName) {
  var jsFileUrl = document.querySelector(
    'script[src*=%22' + targetJsFileName + '%22]'
  ).src;
  console.log(jsFileUrl);
  fetch(jsFileUrl)
    .then(function (x) {
      return x.text();
    })
    .then(function (text) {
      var lines = stringWithoutComments(text).split(%22\n%22);
      findThing(lines, %22`%22);
      findThing(lines, %22const %22);
      findThing(lines, %22let %22);
      findThing(lines, %22=>%22);
      findThing(lines, %22...%22);
      findThing(lines, %22 of %22);
      findThing(lines, %22new Map(%22);
      findThing(lines, %22new Set(%22);
      findThing(lines, %22class %22);
      findThing(lines, %22new Promise(%22);
      findThing(lines, %22 Symbol(%22);
      findThing(lines, %22.includes(%22);
      findThing(lines, %22.startsWith(%22);
      findThing(lines, %22.endsWith(%22);
      findThing(lines, %22Array.from(%22);
      findThing(lines, %22Math.trunc(%22);
      findThing(lines, %22Math.sign(%22);
      findThing(lines, %22Math.cbrt(%22);
      findThing(lines, %22Math.log2(%22);
      findThing(lines, %22Math.log10(%22);
      findThing(lines, %22Number.EPSILON%22);
      findThing(lines, %22Number.MIN_SAFE_INTEGER%22);
      findThing(lines, %22Number.MAX_SAFE_INTEGER%22);
      findThing(lines, %22Number.isInteger(%22);
      findThing(lines, %22Number.isSafeInteger(%22);
      findThing(lines, %22 from %22);
      console.log(jsFileUrl);
      alert(%22Note: only checks for \n\n`\nconst\nlet\n=>\n...\n%22);
    });

  function stringWithoutComments(string) {
    return string.replace(%2F\%2F\*[\s\S]*?\*\%2F|(?<=[^:])\%2F\%2F.*|^\%2F\%2F.*%2Fg, %22%22);
  }

  function findThing(lines, thing) {
    for (let i in lines) {
      const line = lines[i];
      if (line.includes(thing)) {
        console.log(%22line%22, Number(i) + 1, ' has %22', thing, '%22:\n', line, %22\n%22);
      }
    }
  }
}

})();
```

https://github.com/hchiam/learning-js/blob/main/bookmarklets/checkForModernJSThatBreaksIE.js
