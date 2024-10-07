var makeFingerDisappearOnLift = false;
var background = '#0000ff80';

var fingerDiv = createHandPart('18mm', '7cm', background, '9mm 9mm 0 0', 'translate(-50%, -9mm)');

document.body.addEventListener('mousemove', function(event) {
  followPosition(event);
});
document.body.addEventListener('touchmove', function(event) {
  followPosition(event.touches[0]);
});
document.body.addEventListener('touchstart', function(event) {
  followPosition(event.touches[0]);
  fingerDiv.style.display = '';
});
document.body.addEventListener('touchend', function(event) {
  if (makeFingerDisappearOnLift) {
    fingerDiv.style.display = 'none';
  }
});

function createHandPart(width, height, background, borderRadius, transform) {
  var div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.width = width;
  div.style.height = height;
  div.style.background = background;
  div.style.borderRadius = borderRadius;
  div.style.transform = transform;
  document.body.appendChild(div);
  return div;
}

function followPosition(clientPosition) {
  positionHandPart(fingerDiv, clientPosition, 0, 0);
}

function positionHandPart(part, clientPosition, offsetX, offsetY) {
  part.style.left = clientPosition.clientX + offsetX + 'px';
  part.style.top = clientPosition.clientY + offsetY + 'px';
}
