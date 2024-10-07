magnifyingGlass();

/**
clone the page and translate/zoom/clip the clone to simulate a magnifying glass:
*/
function magnifyingGlass() {
  var magnifierSize = 200;
  var magnificationScale = 2;
  var magnifierBorderRadius = '50%';
  var magnifierBorderStyle = '2px solid #000';
  var magnifierBackgroundColor = '#fff';
  var magnifierZIndex = 2147483647;
  var halfMagnifierSize = magnifierSize / 2;
  
  var magnifier = document.getElementById('page-magnifier');
  
  if (magnifier) {
    magnifier.parentNode.removeChild(magnifier);
    document.removeEventListener('mousemove', moveMagnifier);
    return;
  }
  
  magnifier = document.createElement('div');
  magnifier.id = 'page-magnifier';
  magnifier.style.position = 'fixed';
  magnifier.style.pointerEvents = 'none';
  magnifier.style.width = magnifierSize + 'px';
  magnifier.style.height = magnifierSize + 'px';
  magnifier.style.borderRadius = magnifierBorderRadius;
  magnifier.style.border = magnifierBorderStyle;
  magnifier.style.overflow = 'hidden';
  magnifier.style.zIndex = magnifierZIndex;
  magnifier.style.background = magnifierBackgroundColor;
  
  var magnifierContent = document.createElement('div');
  magnifierContent.style.position = 'absolute';
  magnifierContent.style.top = '0';
  magnifierContent.style.left = '0';
  magnifierContent.style.width = document.documentElement.scrollWidth + 'px';
  magnifierContent.style.height = document.documentElement.scrollHeight + 'px';
  
  var clonedBody = document.body.cloneNode(true);
  clonedBody.style.margin = '0';
  clonedBody.inert = true;
  
  magnifierContent.appendChild(clonedBody);
  magnifier.appendChild(magnifierContent);
  document.body.appendChild(magnifier);
  
  document.addEventListener('mousemove', moveMagnifier);
  
  function moveMagnifier(e) {
    var x = e.clientX;
    var y = e.clientY;
    
    magnifier.style.left = (x - halfMagnifierSize) + 'px';
    magnifier.style.top = (y - halfMagnifierSize) + 'px';
    
    magnifierContent.style.transformOrigin = x + 'px ' + y + 'px';
    magnifierContent.style.transform = 'translate(' + (-x + halfMagnifierSize) + 'px, ' + (-y + halfMagnifierSize) + 'px) scale(' + magnificationScale + ')';
  }
}
