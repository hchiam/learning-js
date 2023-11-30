/** 
reference: https://www.corewebvitals.io/pagespeed/14-methods-to-defer-javascript#d8 
example usage: 
loadScript('javascript.js'); 
*/
function loadScript(scriptSrc) {
  const script = document.createElement("script");
  script.src = scriptSrc;
  document.head.appendChild(script);
}
