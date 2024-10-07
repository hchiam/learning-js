javascript:(()=>{
  var useLeftHand = false;
  var makeFingerDisappearOnLift = false;

  var finger = createHtml();
  document.body.appendChild(finger);
  hideFinger();
  
  document.body.addEventListener('mousemove', function(event) {
    followPosition(event);
    showFinger();
  });
  document.body.addEventListener('touchstart', function(event) {
    followPosition(event.touches[0]);
    showFinger();
  });
  document.body.addEventListener('touchmove', function(event) {
    followPosition(event.touches[0]);
  });
  document.body.addEventListener('touchend', function(event) {
    if (makeFingerDisappearOnLift) {
      hideFinger();
    }
  });
  
  function followPosition(clientPosition) {
    finger.style.left = clientPosition.clientX + 'px';
    finger.style.top = clientPosition.clientY + 'px';
  }
  
  function showFinger() {
    finger.style.display = '';
  }
  function hideFinger() {
    finger.style.display = 'none';
  }

  function createHtml() {
    var index = document.createElement('div');
    index.style.position = 'fixed';
    index.style.width = '18mm'; /* https://www.smashingmagazine.com/2012/02/index-friendly-design-ideal-mobile-touchscreen-target-sizes */
    index.style.height = '75mm';
    index.style.borderRadius = '9mm 9mm 0 0';
    index.style.transformOrigin = '0 0';
    index.style.transform = (useLeftHand ? 'scaleX(-1) ' : '') + 'rotate(-0.125turn) translate(-9mm, -9mm) ';
    index.style.background = '#0000ff80';
    index.style.pointerEvents = 'none';
    index.style.zIndex = 2147483647;
    index.style.boxSizing = 'border-box';
    index.style.border = 'none';
    
    var thumb = index.cloneNode();
    thumb.style.width = '18mm';
    thumb.style.height = '30mm';
    thumb.style.transform = 'translate(-25mm, 45mm)';
    thumb.style.borderRadius = '9px 100% 0 0';
    
    var middle = index.cloneNode();
    middle.style.width = '15mm';
    middle.style.height = '40mm';
    middle.style.transform = 'translate(18mm, 35mm)';
    
    var ring = index.cloneNode();
    ring.style.width = '14mm';
    ring.style.height = '31mm';
    ring.style.transform = 'translate(33mm, 44mm)';
    
    var pinky = index.cloneNode();
    pinky.style.width = '13mm';
    pinky.style.height = '20mm';
    pinky.style.transform = 'translate(47mm, 55mm)';
    
    var palm = index.cloneNode();
    palm.style.width = '85mm';
    palm.style.height = '75mm';
    palm.style.transform = 'translate(-25mm, 75mm)';
    palm.style.borderRadius = '0 0 100% 100%';
    
    index.appendChild(thumb);
    index.appendChild(middle);
    index.appendChild(ring);
    index.appendChild(pinky);
    index.appendChild(palm);
    
    return index;
  }
})();
