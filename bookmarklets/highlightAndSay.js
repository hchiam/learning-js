javascript: (function () {
  window.highlightWhatYouClick = !window.highlightWhatYouClick;
  console.log("Run again to toggle.");

  window.say = function (what, voiceLang, callback) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(what);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voiceLang
      ? voices.filter((v) => v.lang === voiceLang)[0]
      : voices[0];
    utterance.onend = callback;
    if (utterance.voice?.voiceURI) {
      utterance.voiceURI = utterance.voice.voiceURI;
    }
    if (utterance.voice?.lang) {
      utterance.lang = utterance.voice.lang;
    }
    speechSynthesis.speak(utterance);
  };

  [...document.querySelectorAll("*")].forEach((x) => {
    x.addEventListener("click", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        const text = x.innerText.trim();
        if (text) say(text);
      }
    });
    let outline = x.style.outline;
    x.addEventListener("mouseover", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        x.style.outline = "solid 3px gold";
      }
    });
    x.addEventListener("mouseout", (e) => {
      if (window.highlightWhatYouClick) {
        e.stopPropagation();
        x.style.outline = outline;
      }
    });
  });
})();
