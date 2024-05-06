/**
Example:
getLanguageName('fr-CA'); // Canadian French
getLanguageName('fr-FR'); // French (France)
*/
function getLanguageName(langCode) {
  const translator = new Intl.DisplayNames([navigator.language],{type:'language'});
  return translator.of(langCode.replace('_','-')); // e.g. Android Chrome uses _ instead of -
}
