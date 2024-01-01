// a Proxy object/function wrapper can be used to let you write custom logic if you detect when someone tries to get/set/delete an object's properties (via get/set/deleteProperty/etc.) or do something with a function (apply/construct).
/** 
 * NOTE: private fields and some built-in objects have methods that would fail because they caN'T be intercepted by Proxy (e.g. Map, Set, Date, Promise),
 * and require a workaround:
 * get(target, prop, receiver) {
    const value = Reflect.get(...arguments);
    return typeof value == 'function' ? value.bind(target) : value;
  }
  but this might expose the original object and possibly break other proxied functionality.
 */

// more reading for proxies in JS: https://2ality.com/2014/12/es6-proxies.html

// proxies also work on function calls: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply

// the following code is based off of: https://gomakethings.com/how-vanilla-js-proxies-work/ and https://javascript.info/proxy

// this also exists: let {proxy, revoke} = Proxy.revocable(object, {}); // proxy.data and revoke()

/**
 * SETUP:
 */

let wizards = {
  neville: "Gryffindor",
  malfoy: "Slitherin",
  cedric: "Hufflepuff",
  chamberOfSecrets: true,
  // chamberOfSecretsExists: function() { // function so this = caller = proxy?
  chamberOfSecretsExists() {
    // function so this = caller = proxy?
    console.log(
      this.chamberOfSecrets
        ? "chamber of secrets DOES exist"
        : "chamber of secrets does NOT exist"
    );
    return this.chamberOfSecrets;
  },
};

const handler = {
  get: function (obj, prop, receiver) {
    if (prop === "chamberOfSecrets") {
      throw new Error("NO ACCESS to the chamber of secrets");
    }
    const value = obj[prop];
    if (typeof value === "function") {
      return value.bind(obj);
    }
    console.log(
      `value GET trigger detected! (could do something here) ${prop}`
    );
    if (obj[prop] === "Slitherin") {
      return "extra GET stuff: Hisssssss....";
    }
    return `${prop}: ${obj[prop]}`;
    // return Reflect.get(obj, prop, receiver); // ? get the current class's/"this's" override data in the case of inheritance? https://javascript.info/proxy#reflect
    // return Reflect.get(...arguments); // shorter version of return Reflect.get(obj, prop, receiver);
  },
  ownKeys(obj) {
    return []; // this makes Object.keys(wizards) return []
  },
  set: function (obj, prop, value) {
    console.log(
      `value SET trigger detected! (could do something here) ${prop} = ${value}`
    );
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("wizardsAndSuch", JSON.stringify(obj));
    }
    obj[prop] = value;
    return true; // indicates success
  },
  deleteProperty: function (obj, prop) {
    console.log(
      `value DELETE trigger detected! (could do something here) ${prop}`
    );
    if (prop === "harry") {
      console.log(`${prop} CANNOT be deleted!`);
      return false; // indicates failure
    } else {
      delete obj[prop];
      console.log(`${prop} deleted!`);
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("wizardsAndSuch", JSON.stringify(obj));
      }
      return true; // indicates success
    }
  },
  /**
   * there are many more handler method "traps": https://javascript.info/proxy
   * has for "# in range" loops
   * getPrototypeOf
   * setPrototypeOf
   * isExtensible
   * preventExtensions
   * defineProperty
   * getOwnPropertyDescriptor
   * ownKeys for Object.keys(obj)
   *
   * and for function objects there's also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * apply
   * construct
   */
};

/**
 * INITIALIZATION OF THE PROXY OBJECT:
 */

wizards = new Proxy(wizards, handler);

/**
 * USAGE:
 */

wizards.gilderoy = "Ravenclaw";
wizards.neville;
wizards.harry = "the boy who lived";
console.log(wizards.malfoy);
delete wizards["malfoy"];
delete wizards.malfoy;
try {
  delete wizards.harry;
} catch (e) {
  console.log(e.message);
}
console.log(wizards.harry);
try {
  wizards.chamberOfSecrets;
} catch (e) {
  console.log(e.message);
}
wizards.chamberOfSecretsExists();
console.log(Object.keys(wizards));

// another example:
let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
  get(obj, prop, receiver) {
    throw new Error("read access to numbers array denied");
    // if (prop in obj) {
    //   return obj[prop];
    // } else {
    //   return 0; // default value
    // }
  },
  set(obj, prop, val) {
    if (typeof val === "number") {
      obj[prop] = val;
    } else {
      console.log("WARNING: ONLY NUMBERS ALLOWED.");
    }
    return true; // indicates success
  },
});
try {
  numbers[1];
} catch (e) {
  console.log(e.message);
}
try {
  numbers[123];
} catch (e) {
  console.log(e.message);
}
console.log("members are not actually hidden though:", numbers);
numbers[0] = 1_000_000;
numbers[0] = "not a number";
