/**
 * To merge at all levels, not just at the top level of the JSON objects.
 * For example:
 *      deepMerge({a:1,b:{c:2}}, {a:3,b:{d:4},e:5})
 * Should return:
 *      {a:3,b:{c:2,d:4},e:5}
 */
function deepMerge(target, source) {
  for (let key in source) {
    const keyIsInBothAndNestsObject =
      typeof target[key] === "object" && typeof source[key] === "object";
    if (keyIsInBothAndNestsObject) {
      target[key] = deepMerge(target[key], source[key]);
    } else {
      // add key or override:
      target[key] = source[key];
    }
  }
  return target;
}

module.exports = {
  deepMerge,
};
