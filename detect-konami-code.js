// reference: https://www.sitepoint.com/jquery-konami-code-listener

function onKonamiCode() {
  alert("Konami code detected!");
}

(function detectKonamiCode() {
  if (window.addEventListener) {
    var seq = [];
    var konamiAsciiSequence = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener(
      "keydown",
      function (event) {
        var key = event.which || event.keyCode;
        seq.push(key);
        var hitKonamiSequence =
          seq.toString().indexOf(konamiAsciiSequence) >= 0;
        if (hitKonamiSequence) {
          onKonamiCode();
          seq = [];
        }
      },
      true
    );
  }
})();
