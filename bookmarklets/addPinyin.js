javascript: (async () => {
  const fontName = "hpf";
  const fontUrl =
    "https://cdn.jsdelivr.net/gh/parlr/hanzi-pinyin-font@master/Hanzi-Pinyin-Font.top.ttf";
  const font = new FontFace(fontName, `url(${fontUrl})`);
  document.fonts.add(font);
  await font.load();
  console.log(`${fontName} font ready!`);
  const elementsWithChinese = [...document.body.querySelectorAll("*")].filter(
    (x) => x.innerText && hasChineseCharacter(getTextOfDirectChildren(x))
  );
  elementsWithChinese.map((x) => {
    x.style.fontFamily = fontName;
    x.style.fontSize = "x-large";
  });
  function hasChineseCharacter(text) {
    return !!text.match(/\p{Script=Han}/u);
  }
  function getTextOfDirectChildren(element) {
    return [...element.childNodes]
      .filter((x) => x.nodeType === Node.TEXT_NODE)
      .map((x) => x.textContent)
      .join("");
  }
})();
