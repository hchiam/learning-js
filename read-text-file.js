// // in the browser:

// fetch("file.txt")
//   .then((response) => response.text())
//   .then((text) => console.log(text));

// // in console terminal CLI: https://github.com/hchiam/learning-nodejs/blob/master/README.md#read-a-local-file-via-console-cli

// (works in Chrome)
// more: https://web.dev/file-system-access/

const openButton = document.getElementById("open");

let fileHandle;
openButton.addEventListener("click", getFileContents);
// openButton.addEventListener("click", getFolder);

async function getFileContents() {
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  console.log(contents);
}

async function getFolder() {
  const dirHandle = await window.showDirectoryPicker();
  // for await (const entry of dirHandle.values()) {
  //   console.log(entry.kind, entry.name);
  // }
  const newFileHandle = await dirHandle.getFileHandle("test.txt", {
    create: false,
  });
  const file = await newFileHandle.getFile();
  const contents = await file.text();
  console.log(contents);
}
