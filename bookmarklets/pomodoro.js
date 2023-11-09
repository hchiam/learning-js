javascript: (() => {
  let stop = false;
  promptForInterval();

  function promptForInterval() {
    stop = false;
    const reminderMinutes = Number(prompt("How many minutes?"));
    const reminderInterval = reminderMinutes * 60_000;
    if (!reminderInterval) return;
    const alarmSayWhat = "Ring ring ring!";
    const alarmInterval = 2000;
    setTimeout(async () => {
      popup();
      while (!stop) {
        say(alarmSayWhat);
        await sleep(alarmInterval);
      }
      promptForInterval();
    }, reminderInterval);
    const targetTime = new Date(
      new Date().getTime() + reminderMinutes * 60_000
    );
    const hours = targetTime.getHours();
    const minutes = String(targetTime.getMinutes()).padStart(2, "0");
    console.log(
      `Alarm for: ${hours}:${minutes}`
    );
  }

  function popup(text) {
    const div = document.createElement("div");
    div.className = "pomodoro-popup";
    div.style.cssText =
      "all: initial; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: fit-content; height: fit-content; padding: 3rem; z-index: 9999; border: 1rem solid navy; background: white !important; color: black !important; overflow-y: auto; border-radius: 5px; font-family: avenir, arial, tahoma; box-shadow: inset 0 -50px 50px -55px rgba(0, 0, 0, 1);";
    div.textContent = text ?? "Stop?";

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.style.cssText =
      "background: red !important; color: white !important; margin: auto;";
    yesButton.addEventListener("click", () => {
      stop = true;
      div.remove();
    });
    div.append(yesButton);

    document.body.append(div);
  }

  window.say = function (what, voiceLang, callback) {
    const utterance = new SpeechSynthesisUtterance(what);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voiceLang
      ? voices.filter((v) => v.lang === voiceLang)[0]
      : voices[0];
    utterance.onend = callback;
    speechSynthesis.speak(utterance);
  };

  async function sleep(milliseconds) {
    await new Promise((r) => setTimeout(r, milliseconds || 1000));
  }
})();
