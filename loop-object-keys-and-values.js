const obj = {
  a: "Some string.",
  b: 42,
  1: { calvinAndHobbes: "transmogrifier" },
  c: 3,
  d: 4,
  e: 0,
  f: 1,
  g: 9,
};

Object.entries(obj).forEach(([k, v]) => {
  console.log(k, v);
});

const sortedDesc = Object.entries(obj).sort((a, b) => {
  return b[1] - a[1];
});

console.log("sorted descending:", sortedDesc);
