/** usage: console.log(getStackTrace()); */
function getStackTrace() {
  const obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return obj.stack;
}
