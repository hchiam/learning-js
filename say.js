/**
// https://github.com/hchiam/learning-js/blob/main/bookmarklets/say.js
say('quelle heure est-il ?', 'fr-CA');
*/
function say(what, voiceLang, callback) {
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
}
