// more info:
// https://web.dev/hid
// https://web.dev/devices-introduction/#discover

// works in Chrome:
makeMacKeyboardFlash();

async function makeMacKeyboardFlash() {
  const device = await getMacKeyboard();

  // await HID connection to open:
  await device.open();

  // blink:
  const timesToBlink = 10;
  const reportId = 1;
  for (let i = 0; i < timesToBlink; i++) {
    // off:
    await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
    await waitFor(100);
    // on:
    await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
    await waitFor(100);
  }
}

async function getMacKeyboard() {
  // ask user to choose an Apple Keyboard Backlight device:
  const appleKeyboardBacklightDevice = {
    vendorId: 0x05ac,
    usage: 0x0f,
    usagePage: 0xff00,
  };
  const [device] = await navigator.hid.requestDevice({
    filters: [appleKeyboardBacklightDevice],
  });
  return device;
}

function waitFor(duration) {
  return new Promise((r) => setTimeout(r, duration));
}
