const obj = {
  a: "Some string.",
  b: 42,
  1: { calvinAndHobbes: "transmogrifier" },
};

Object.entries(obj).forEach(([k, v]) => console.log(k, v));
