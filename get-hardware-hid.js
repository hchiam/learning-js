// more info:
// https://web.dev/hid
// https://web.dev/devices-introduction/#discover

// you can also see a listing on this page in Chrome:
// about://device-log

// works in Chrome:
console.log(getHID());

async function getHID() {
  console.log("this works in Chrome");

  const [device] = await navigator.hid.requestDevice({
    filters: [],
  });
  return device;
}
