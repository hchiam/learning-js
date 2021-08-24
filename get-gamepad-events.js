// more info:
// https://web.dev/gamepad/
// https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
// https://luser.github.io/gamepadtest
// https://github.com/luser/gamepadtest

let gamepad, buttons; /*axes*/
let buttonListener;

window.addEventListener("gamepaddisconnected", (event) => {
  console.log("🎮❌ A gamepad was disconnected:", event);
  clearInterval(buttonListener);
});

window.addEventListener("gamepadconnected", (event) => {
  console.log("🎮✅ A gamepad was connected:", event);
  /*
    gamepad: Gamepad
    axes: (4) [0, 0, 0, 0]
    buttons: (17) [GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton]
    connected: true
    id: "Xbox 360 Controller (STANDARD GAMEPAD Vendor: 045e Product: 028e)"
    index: 0
    mapping: "standard"
    timestamp: 6563054.284999998
    vibrationActuator: GamepadHapticActuator {type: "dual-rumble"}
  */
  gamepad = event.gamepad;
  console.log("gamepad", gamepad);
  buttons = event.gamepad.buttons;
  const axes = event.gamepad.axes;
  console.log(`${buttons.length} buttons`);
  console.log(`${axes.length} axes`);
  listenForButtons();
});

let previousAxes = [];
function listenForButtons() {
  clearInterval(buttonListener);
  buttonListener = setInterval(() => {
    const axes = gamepad.axes.map((a) => Math.round(a * 100) / 100);
    const buttonsOn = buttons
      .map((b, i) => {
        return { i: i, on: b.pressed || b.touched };
      })
      .filter((b) => b.on)
      .map((b) => b.i);
    if (buttonsOn.length) {
      console.log("Buttons on:", buttonsOn);
    }
    const didAxesChange =
      previousAxes.length === 0 ||
      previousAxes.filter((pa, i) => {
        return pa !== axes[i];
      }).length;
    if (didAxesChange) {
      console.log("Axes:", axes);
      previousAxes = axes;
    }
  }, 100);
}
