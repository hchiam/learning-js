function getLanguageName(langCode) {
  const translator = new Intl.DisplayNames([navigator.language],{type:'language'});
  return translator.of(langCode);
}
