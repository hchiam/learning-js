function windowBlurEvent(callback) {
  document.addEventListener('blur', function() {
    callback();
  })
}
