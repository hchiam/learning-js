// input you can click on to get a base64 string you could use in a CSS background-image:
var fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = "image/*";
document.body.appendChild(fileInput);
fileInput.addEventListener("change", function (event) {
  var file = event.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var base64String = e.target.result;
      console.log(base64String);
    };
    reader.readAsDataURL(file);
  }
});
