// more info:
// https://web.dev/hid
// https://web.dev/devices-introduction/#discover

// works in Chrome:
console.log(getHID());

async function getHID() {
  console.log("this works in Chrome");

  const [device] = await navigator.hid.requestDevice({
    filters: [],
  });
  return device;
}
