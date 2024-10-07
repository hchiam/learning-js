var makeFingerDisappearOnLift = false;
var div = document.createElement('div');
div.style.position = 'fixed';
div.style.background = '#0000ff80';
div.style.height = '7cm';
div.style.width = '18mm';
div.style.transform = 'translate(-50%, -9mm)';
div.style.borderRadius = '9mm 9mm 0 0';
document.body.appendChild(div);
function followPosition(clientPosition) {
  div.style.left = clientPosition.clientX + 'px';
  div.style.top = clientPosition.clientY + 'px';
}
document.body.addEventListener('mousemove', function(event) {
  followPosition(event);
});
document.body.addEventListener('touchmove', function(event) {
  followPosition(event.touches[0]);
});
document.body.addEventListener('touchstart', function(event) {
  followPosition(event.touches[0]);
  div.style.display = '';
});
document.body.addEventListener('touchend', function(event) {
  if (makeFingerDisappearOnLift) {
    div.style.display = 'none';
  }
});
