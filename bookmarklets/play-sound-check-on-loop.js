javascript: (async () => {
  const sharedContext = new AudioContext();
  alert("you might need to click somewhere in the screen to start");
  setInterval(async () => {
    await note("C");
    await note("E");
    await note("G");
    await note("high C");
  }, 3000);

  async function rest(ms = 250) {
    await new Promise((r) => setTimeout(r, ms));
  }

  async function note(f = 261.626 /*middle C*/, ms = 250) {
    await rest(50); /* to help make notes sound distinct */
    return new Promise((resolve) => {
      const c = sharedContext;
      const o = c.createOscillator();
      const g = c.createGain();

      o.type = "sine";
      o.frequency.value = noteHelper(f);
      o.connect(g);
      g.connect(c.destination);

      if (g.gain.linearRampToValueAtTime) {
        const now = c.currentTime;
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(1, now + 0.01);
        g.gain.linearRampToValueAtTime(0, now + ms / 1000 - 0.01);
      }

      o.start();
      setTimeout(() => {
        o.stop();
        resolve();
      }, ms);
    });
  }

  function noteHelper(f) {
    if (!isNaN(f)) return f;

    /* https://en.wikipedia.org/wiki/Piano_key_frequencies */
    switch (f) {
      case "high C":
        return 523.251;
      case "B":
        return 493.883;
      case "Bb":
      case "A#":
        return 466.164;
      case "A":
        return 440.0;
      case "Ab":
      case "G#":
        return 415.305;
      case "G":
        return 391.995;
      case "Gb":
      case "F#":
        return 369.994;
      case "F":
        return 349.228;
      case "E":
        return 329.628;
      case "Eb":
      case "D#":
        return 311.127;
      case "D":
        return 293.665;
      case "Db":
      case "C#":
        return 277.183;
      case "C":
        return 261.626;
    }

    const isKeyOn88KeyPiano = String(f).startsWith("key ");
    if (isKeyOn88KeyPiano) {
      const keyN = Number(f.replace("key ", ""));
      return 2 ** ((keyN - 49) / 12) * 440; /* key 49 being A4 = 440 Hz */
    }

    return f;
  }

  async function chord(notes = [], ms = 250) {
    if (typeof notes === "string") {
      notes = notes.split(/\s+/);
    }
    if (Array.isArray(notes)) {
      notes.forEach((n) => note(n, ms));
    }
  }
})();
