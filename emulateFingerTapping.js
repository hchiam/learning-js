var makeFingerDisappearOnLift = true;
var div = document.createElement('div');
div.style.position = 'fixed';
div.innerText = 'hi';
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
