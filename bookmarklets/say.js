javascript: window.say = function (what, voiceLang, callback) {
  const utterance = new SpeechSynthesisUtterance(what);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voiceLang
    ? voices.filter((v) => v.lang === voiceLang)[0]
    : voices[0];
  utterance.onend = callback;
  speechSynthesis.speak(utterance);
};
say(prompt("Say what?"));
