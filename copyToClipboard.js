// latest version: https://github.com/hchiam/clipboard

function copyToClipboard(text) {
  try {
    navigator.clipboard
      .writeText(text) // if not IE
      .catch(function (err) {
        alert(
          "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
            text
        );
        console.log(err);
      });
  } catch (e) {
    try {
      var temp = document.createElement("input");
      document.body.append(temp);
      temp.value = text;
      temp.select();
      document.execCommand("copy");
      temp.remove();
    } catch (err) {
      alert(
        "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
          text
      );
      console.log(err);
    }
  }
}
