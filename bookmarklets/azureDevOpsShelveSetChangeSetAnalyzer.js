javascript: (async () => {
  const needJQuery = typeof $ === "undefined" || !$()?.on;
  if (needJQuery) {
    await fetch("https://code.jquery.com/jquery-3.7.0.min.js")
      .then((x) => x.text())
      .then((x) => {
        eval(x);
        console.log("jQuery ready");
      });
  }

  const ht = {};
  const previousPath = [];
  let previousLevel = 0;
  const pathPrefix = "http://.../tfs/DefaultCollection/.../_apis/.../Items?";
  const urlPostfix =
    "&recursionLevel=0&versionDescriptor.versionOption=0&versionDescriptor.version=23911&versionDescriptor.versionType=1&includeContent=true";
  const allPaths = [];
  [
    ...$(".repos-changes-explorer-tree-root")
      .parent()
      .find(
        "[aria-level]:not(:has(.repos-file-explorer-tree-thread-item)), .repos-changes-explorer-tree-root-content"
      ),
  ].forEach((x) => {
    let text = $(x).find("span:not(:has(*))").text();
    const level = Number($(x).closest("[aria-level]").attr("aria-level"));
    const isFile = /\w+\.\w+/.test(text);
    if (!level && $(x).is(".repos-changes-explorer-tree-root-content")) {
      previousPath.push(text);
      ht[text] = {};
    } else if (level === 1) {
      previousPath.push(text);
      ht[text] = {};
      if (isFile) {
        ht[text] = { filePath: previousPath.join("/") };
        allPaths.push(previousPath.join("/"));
      }
    } else if (level < previousLevel) {
      let levelAt = previousLevel;
      while (level < levelAt + 1) {
        previousPath.pop();
        levelAt--;
      }
      previousPath.push(text);
      let temp = ht;
      for (let folder of previousPath) {
        if (!(folder in temp)) temp[folder] = {};
        temp = temp[folder];
      }
      if (isFile) {
        temp.filePath = previousPath.join("/");
        allPaths.push(previousPath.join("/"));
      }
    } else if (level > previousLevel) {
      previousPath.push(text);
      let temp = ht;
      for (let folder of previousPath) {
        if (!(folder in temp)) temp[folder] = {};
        temp = temp[folder];
      }
      if (isFile) {
        temp.filePath = previousPath.join("/");
        allPaths.push(previousPath.join("/"));
      }
    }
    previousLevel = level;
  });
  const allUrls = allPaths.map(
    (x) => pathPrefix + "path=" + encodeURIComponent(x) + urlPostfix
  );
  console.log("allUrls", allUrls);
  const htmlUrls = allUrls.filter((x) => /\.(cs)?html&/.test(x));
  const cssUrls = allUrls.filter((x) => /\.s?css&/.test(x));
  const tsUrls = allUrls.filter((x) => /\.ts&/.test(x));
  const jsUrls = allUrls.filter((x) => /\.js&/.test(x));
  tsUrls.map((x) =>
    fetch(x)
      .then((x) => x.text())
      .then((x) => checkTs(x))
  );
  jsUrls.map((x) =>
    fetch(x)
      .then((x) => x.text())
      .then((x) => checkJs(x))
  );
  console.log("Done running script.");
  function checkHtml(x) {}
  function checkCss(x) {}
  function checkTs(x) {}
  function checkJs(x) {
    checkForModernJSThatBreaksIE(x);
  }

  function checkForModernJSThatBreaksIE(x) {
    var foundAnything = false;
    var lines = stringWithoutComments(x).split("\n");
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
    if (!foundAnything) console.log("No IE incompatibilities detected!");
    console.log("Done analyzing for IE compatibility.");
    function stringWithoutComments(string) {
      return string.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "");
    }
    function findThing(lines, thing) {
      for (let i in lines) {
        const line = lines[i];
        if (line.includes(thing)) {
          foundAnything = true;
          console.log(
            "line",
            Number(i) + 1,
            ` has "`,
            thing,
            `":\n`,
            line,
            "\n"
          );
        }
      }
    }
  }
})();
