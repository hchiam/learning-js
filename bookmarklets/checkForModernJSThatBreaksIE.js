checkForModernJSThatBreaksIE("targetJsFileName");

function checkForModernJSThatBreaksIE(targetJsFileName) {
  var foundAnything = false;
  var jsFileUrl = document.querySelector(
    'script[src*="' + targetJsFileName + '"]'
  ).src;
  console.log("Analyzing: ", jsFileUrl);
  fetch(jsFileUrl)
    .then(function (x) {
      return x.text();
    })
    .then(function (text) {
      var lines = stringWithoutComments(text).split("\n");
      findThing(lines, "`");
      findThing(lines, "const ");
      findThing(lines, "let ");
      findThing(lines, "=>");
      findThing(lines, "...");
      findThing(lines, " of ");
      findThing(lines, "new Map(");
      findThing(lines, "new Set(");
      findThing(lines, "class ");
      findThing(lines, "new Promise(");
      findThing(lines, " Symbol(");
      findThing(lines, ".includes(");
      findThing(lines, ".startsWith(");
      findThing(lines, ".endsWith(");
      findThing(lines, "Array.from(");
      findThing(lines, "Math.trunc(");
      findThing(lines, "Math.sign(");
      findThing(lines, "Math.cbrt(");
      findThing(lines, "Math.log2(");
      findThing(lines, "Math.log10(");
      findThing(lines, "Number.EPSILON");
      findThing(lines, "Number.MIN_SAFE_INTEGER");
      findThing(lines, "Number.MAX_SAFE_INTEGER");
      findThing(lines, "Number.isInteger(");
      findThing(lines, "Number.isSafeInteger(");
      findThing(lines, " from ");
      if (!foundAnything) console.log("Detected nothing!");
      console.log("Done analyzing: ", jsFileUrl);
      alert(
        "Note: only checks for some of the ES6 features, like \n\n`\nconst\nlet\n=>\n...\n"
      );
    });

  function stringWithoutComments(string) {
    return string.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "");
  }

  function findThing(lines, thing) {
    for (let i in lines) {
      const line = lines[i];
      if (line.includes(thing)) {
        foundAnything = true;
        console.log("line", Number(i) + 1, ' has "', thing, '":\n', line, "\n");
      }
    }
  }
}
