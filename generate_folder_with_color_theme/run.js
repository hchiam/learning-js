/**
rm -rf new_folder
node run.js
*/

const args = process.argv.slice(2);

if (!args || args.length < 1) {
  console.log(
    `
Missing arguments. Try something like this: 

\x1b[36m node run.js image.png \x1b[0m

Or this: 

\x1b[36m node run.js image.png template_folder new_folder \x1b[0m
`
  );
  return;
}

const imageFileName = args[0];

const templateFolder = args[1] || "./template_folder";
const newFolder = args[2] || "./new_folder";
const rootStylesheet = args[3] || newFolder + "/styles.css";
const mainColorRegex = args[4] || "(--main-color: )(.+?)(;)"; // `$1${firstColor}$3`
const secondaryColorRegex = args[5] || "(--secondary-color: )(.+?)(;)"; // `$1${secondColor}$3`

const fs = require("fs");
const path = require("path");
const PNG = require("./png-node");

processImageFile();

function processImageFile() {
  readImageFile(imageFileName, (data) => {
    copyFolder(templateFolder, newFolder);
    getColors(imageFileName, replaceRootColors);
  });
}

function readImageFile(imageFileName, callback) {
  fs.readFile(imageFileName, async function (err, data) {
    if (err) return console.log(err);
    if (callback) callback(data);
  });
}

async function copyFolder(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  let entries = await fs.promises.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyFolder(srcPath, destPath)
      : await fs.promises.copyFile(srcPath, destPath);
  }
}

function getColors(imageFileName, callback) {
  PNG.decode(imageFileName, (pixels) => {
    const rgbaArray = [];
    for (let i = 0; i < pixels.length - 4; i++) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = Math.round((Number(pixels[i + 3]) / 255) * 1000) / 1000;
      rgbaArray[i] = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    const topTwoColors = getTopTwoColors(rgbaArray);
    console.log("\nTop two colors:", topTwoColors, "\n");
    if (callback) callback(topTwoColors);
  });
}

function getTopTwoColors(colors) {
  const ht = {};
  let firstCount = 0;
  let firstColor = "transparent";
  let secondCount = 0;
  let secondColor = "transparent";
  colors.forEach((color) => {
    if (isTransparentRgbaString(color)) {
      return; // ignore transparent colors
    }
    if (color in ht) {
      ht[color]++;
    } else {
      ht[color] = 1;
    }
    if (ht[color] > firstCount) {
      firstCount = ht[color];
      firstColor = color;
    } else if (ht[color] > secondCount) {
      secondCount = ht[color];
      secondColor = color;
    }
  });
  return { firstColor, secondColor };
}

function isTransparentRgbaString(rgbaString) {
  return rgbaString.endsWith(", 0)");
}

function replaceRootColors(topTwoColors) {
  const { firstColor, secondColor } = topTwoColors;
  fs.readFile(rootStylesheet, "utf8", async function (err, rootStylesheetText) {
    if (err) return console.log(err);

    const rootStylesheetTextEdited = rootStylesheetText
      .replace(new RegExp(mainColorRegex), `$1${firstColor}$3`)
      .replace(new RegExp(secondaryColorRegex), `$1${secondColor}$3`);

    fs.writeFile(
      rootStylesheet,
      rootStylesheetTextEdited,
      async function (err, data) {
        if (err) return console.log(err);
      }
    );
  });
}
