(async function exampleUsage() {
  // arbitrary key on 88-key piano:
  await note("key 40"); // middle C
  await note("key 42"); // D
  await note("key 44"); // E
  await note("key 45"); // F
  await note("key 47"); // G
  await note("key 49"); // A
  await note("key 51"); // B
  await note("key 52"); // high C
  // play notes in sequence:
  await play([["E"], ["E"], [""], ["E"], [""], ["C"], ["E", 500], ["G", 1000]]);
  // play notes one at a time:
  await note("E");
  await note("E");
  await rest();
  await note("E");
  await rest();
  await note("C");
  await note("E", 500);
  await note("G", 1000);
  // chord:
  note("G", 1000);
  note("E", 1000);
  note("C", 1000);
  await rest(1000);
  // now play a chord progression:
  note("C", 1000);
  note("E", 1000);
  note("G", 1000);
  await rest(1000);
  note("D", 1000);
  note("F", 1000);
  note("A", 1000);
  await rest(1000);
  note("F", 1000);
  note("A", 1000);
  note("high C", 1000);
  await rest(1000);
  note("C", 1000);
  note("E", 1000);
  note("G", 1000);
})();

async function play(sequence = []) {
  for await (let item of sequence) {
    if (item[0] === "") {
      const ms = item[1] ?? 250;
      await rest(ms);
    } else {
      const [f, ms] = item;
      await note(f, ms);
    }
  }
}

async function rest(ms = 250) {
  await new Promise((r) => setTimeout(r, ms));
}

const sharedContext = new AudioContext();
async function note(f = 261.626 /*middle C*/, ms = 250) {
  await rest(50); // to help make notes sound distinct
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

  // https://en.wikipedia.org/wiki/Piano_key_frequencies
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
    return 2 ** ((keyN - 49) / 12) * 440; // key 49 being A4 = 440 Hz
  }

  return f;
}
