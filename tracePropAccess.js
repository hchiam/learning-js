// this code is based on: https://2ality.com/2014/12/es6-proxies.html
// powered by JavaScript Proxy

function tracePropAccess(obj, propKeys) {
  let propKeySet = new Set(...propKeys);
  return new Proxy(obj, {
    get(target, propKey, receiver) {
      if (propKeySet.has(propKey)) {
        console.log(`GET ${propKey}`);
      }
      return Reflect.get(target, propKey, receiver);
    },
    set(target, propKey, value, receiver) {
      if (propKeySet.has(propKey)) {
        console.log(`SET ${propKey} = ${value}`);
      }
      return Reflect.set(target, propKey, value, receiver);
    },
  });
}

// object to trace:
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return "Point(" + this.x + "," + this.y + ")";
  }
}

// setup:
let p = new Point(5, 7);
p = tracePropAccess(p, ["x", "y"]);

// see it in action:
p.x;
p.y;
p.x = 42;
p.toString();
