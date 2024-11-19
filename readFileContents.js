/**
<input id="file" type="file" accept=".htm, .html">
see https://web.dev/articles/read-files for more, like multiple, drag-and-drop, and metadata.
*/
function onFileChange(event) {
  const fileList = event.target.files;
  console.log(fileList);
  const file = fileList[0];
  const reader = new FileReader();
  reader.readAsText(file); // or .readAsDataURL(file) for img
  reader.addEventListener("load", (event) => {
    const fileText = event.target.result;
    console.log(fileText);
  });
  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });
}
