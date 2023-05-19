const myVariable = 123;

// quick way:
const variableName = Object.keys({myVariable})[0];
alert(variableName);

// function call:
function getVariableName(callbackToGetVarNotVal) {
  return String(callbackToGetVarNotVal).replace(/[ \(\)=>{}]/g,'');
}
alert(getVariableName(() => myVariable));
