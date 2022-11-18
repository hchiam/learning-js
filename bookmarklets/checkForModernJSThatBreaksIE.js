checkForModernJSThatBreaksIE("targetJsFileName");

function checkForModernJSThatBreaksIE(targetJsFileName) {
  var jsFileUrl = document.querySelector(
    'script[src*="' + targetJsFileName + '"]'
  ).src;
  console.log(jsFileUrl);
  fetch(jsFileUrl)
    .then(function (x) {
      return x.text();
    })
    .then(function (text) {
      var lines = text.split("\n");
      findThing(lines, "`");
      findThing(lines, "const ");
      findThing(lines, "let ");
      findThing(lines, "=>");
      findThing(lines, "...");
      console.log(jsFileUrl);
      alert("Note: only checks for \n\n`\nconst\nlet\n=>\n...\n");
    });

  function findThing(lines, thing) {
    for (let i in lines) {
      const line = lines[i];
      if (line.includes(thing)) {
        console.log("line", Number(i) + 1, ' has "', thing, '":\n', line, "\n");
      }
    }
  }
}
