// reference: https://www.sitepoint.com/jquery-konami-code-listener

// https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice

function onKonamiCode() {
  alert("Konami code detected!");
}

(function detectKonamiCode() {
  if (window.addEventListener) {
    var seq = [];
    var konamiAsciiSequence = "38,38,40,40,37,39,37,39,66,65";
    var sequenceInWords =
      "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
    window.addEventListener(
      "keydown",
      function (event) {
        var key = event.key || event.which || event.keyCode;
        seq.push(key);
        var hitKonamiSequence =
          seq.toString().indexOf(konamiAsciiSequence) >= 0;
        var hitWordSequence = seq.toString().indexOf(sequenceInWords) >= 0;
        if (hitKonamiSequence || hitWordSequence) {
          onKonamiCode();
          seq = [];
        }
      },
      true
    );
  }
})();
