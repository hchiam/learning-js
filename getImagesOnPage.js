Array.from(document.querySelectorAll("img"))
  .map((x) => x.src)
  .map((x, i) => `curl ${x} > ${i + 1}.png`)
  .join(" && ") + ";";

// curl https://... > filename.png

// curl https://... > 1.png && curl https://... > 2.png;

function memriseExample() {
  var command =
    Array.from($$(".thing"))
      .map((x) => {
        const name = x.querySelector(".text").innerText.replace(/ /g, "_");
        const imgSrc = x.querySelector("img").src;
        return { name, imgSrc };
      })
      .map((x, i) => `curl ${x.imgSrc} > ${i + 1}_${x.name}.png`)
      .join(" && ") + ";";

  copy(command);
}
