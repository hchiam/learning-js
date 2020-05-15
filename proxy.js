// a Proxy can be used to let you detect when someone tries to get/set/delete an object's properties (via get/set/deleteProperty).

// more reading for proxies in JS: https://2ality.com/2014/12/es6-proxies.html

// proxies also work on function calls: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply

// the following code is based off of: https://gomakethings.com/how-vanilla-js-proxies-work/

/**
 * SETUP:
 */

const wizards = {
  neville: "Gryffindor",
  malfoy: "Slitherin",
  cedric: "Hufflepuff",
};

const handler = {
  get: function (obj, prop) {
    console.log("value GET trigger detected! (could do something here)");
    if (obj[prop] === "Slitherin") {
      return "Hisssssss....";
    }
    return obj[prop];
  },
  set: function (obj, prop, value) {
    console.log("value SET trigger detected! (could do something here)");
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("wizardsAndSuch", JSON.stringify(obj));
    }
    obj[prop] = value;
    return true;
  },
  deleteProperty: function (obj, prop) {
    console.log("value DELETE trigger detected! (could do something here)");
    delete obj[prop];
    console.log(`attempt to delete ${prop} detected!`);
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("wizardsAndSuch", JSON.stringify(obj));
    }
    return true;
  },
};

const wizardsProxy = new Proxy(wizards, handler);

/**
 * USAGE:
 */

wizardsProxy.gilderoy = "Ravenclaw";
wizardsProxy.neville;
console.log(wizardsProxy.malfoy);
delete wizardsProxy["malfoy"];
delete wizardsProxy.malfoy;
