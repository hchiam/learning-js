/**
rm -rf new_folder
node run.js
*/

const cliArgs = process.argv.slice(2);

if (!cliArgs || cliArgs.length < 1) {
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

const imageFileName = cliArgs[0];

const templateFolder = cliArgs[1] || "./template_folder";
const newFolder = cliArgs[2] || "./new_folder";

const fs = require("fs");
const path = require("path");
const PNG = require("./png-node");

processImageFile();

function processImageFile() {
  readImageFile(imageFileName, (data) => {
    copyFolder(templateFolder, newFolder);
    getColors(imageFileName);
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

function getColors(imageFileName) {
  PNG.decode(imageFileName, (pixels) => {
    const rgbaArray = [];
    for (let i = 0; i < pixels.length - 4; i++) {
      rgbaArray[i] = `rgba(${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]}, ${
        pixels[i + 3]
      })`;
    }
    const topTwoColors = getTopTwoColors(rgbaArray);
    console.log("\nTop two colors:", topTwoColors, "\n");
  });
}

function getTopTwoColors(colors) {
  const ht = {};
  let firstCount = 0;
  let firstColor = "transparent";
  let secondCount = 0;
  let secondColor = "transparent";
  colors.forEach((color) => {
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
