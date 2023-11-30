/** 
reference: https://www.corewebvitals.io/pagespeed/14-methods-to-defer-javascript#d8 
example usage: 
loadScript('javascript.js'); 
compare with:
https://github.com/hchiam/learning-js/blob/main/confetti.js
https://github.com/hchiam/learning-js/blob/main/fetch-await-example.js
https://github.com/hchiam/learning-js/blob/main/fetch-github-latest-release-name.js
*/
function loadScript(scriptSrc) {
  const script = document.createElement("script");
  script.src = scriptSrc;
  document.head.appendChild(script);
}
