var div = document.createElement('div');
div.style.position = 'fixed';
div.innerText = 'hi';
document.body.appendChild(div);
document.body.addEventListener('mousemove', function(event) {
  div.style.left = event.clientX + 'px';
  div.style.top = event.clientY + 'px';
});
