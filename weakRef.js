// https://javascript.info/weakref-finalizationregistry
/**
 * NOTE: in most cases WeakRef is usually not needed and not recommended.
 * Possible use cases: (but note some unpredictability noted in https://javascript.info/weakref-finalizationregistry)
 * - checking if objects are in a "cache" without preventing garbage collection.
 * - tracking whether a DOM object is still present (with a variable) without preventing garbage collection.
 */
let strongRef = { data: "hi" };
let weakRef = new WeakRef(strongRef);

strongRef = null;

if (global.gc) {
  global.gc();
} else {
  console.log(
    "Garbage Collection not available. Try this: node --expose-gc weakRef.js"
  );
}

console.log(strongRef);

setTimeout(() => {
  let ref = weakRef.deref(); // returns undefined if it's been garbage collected
  console.log("should be null after actual garbage collection:", ref);
}, 1000);

// new FinalizationRegistry(callback) can be used to do more things upon garbage collection
