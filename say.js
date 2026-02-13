/**
// https://github.com/hchiam/learning-js/blob/main/bookmarklets/say.js

// https://github.com/hchiam/say-what/blob/main/index.html

let voices = speechSynthesis.getVoices();
speechSynthesis.addEventListener("voiceschanged", () => {
  voices = speechSynthesis.getVoices();
});

say('quelle heure est-il ?', 'fr-CA');

say('quelle heure est-il ?', 'fr-CA', null, {pitch:0.5});
say('quelle heure est-il ?', 'fr-CA', null, {pitch:1});
say('quelle heure est-il ?', 'fr-CA', null, {pitch:1.5});
say('quelle heure est-il ?', 'fr-CA', null, {pitch:1.75});
say('quelle heure est-il ?', 'fr-CA', null, {pitch:2});

// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
*/
function say(what, voiceLang, callback, { pitch, rate, volume } = {}) {
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
}
