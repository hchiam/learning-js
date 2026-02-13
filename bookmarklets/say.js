javascript: window.say = function (
  what,
  voiceLang,
  callback,
  { pitch, rate, volume } = {}
) {
  const utterance = new SpeechSynthesisUtterance(what);
  if (pitch) utterance.pitch = pitch;
  if (rate) utterance.rate = rate;
  if (volume) utterance.volume = volume;
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
say(prompt("Say what?"));
