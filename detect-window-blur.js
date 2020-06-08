function windowBlurEvent(callback) {
  window.addEventListener('blur', function() {
    callback();
  })
}
