(async () => {
  const fontName = "hpf";
  const fontUrl =
    "https://cdn.jsdelivr.net/gh/parlr/hanzi-pinyin-font@master/Hanzi-Pinyin-Font.top.ttf";
  const font = new FontFace(fontName, `url(${fontUrl})`);
  document.fonts.add(font);
  await font.load();
  console.log(`${fontName} font ready!`);
})();
