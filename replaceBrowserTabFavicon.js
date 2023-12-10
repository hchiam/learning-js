const iconUrl =
  "https://thenounproject.com/api/private/icons/1092604/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0";
removeBrowserTabFavicon(iconUrl);

// or just remove the icon with: removeBrowserTabFavicon();

function removeBrowserTabFavicon(replacementIcon) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href =
    replacementIcon ||
    document.createElement("canvas").toDataURL("image/x-icon");
}
