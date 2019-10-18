// another example: https://github.com/hchiam/hchiam.github.io/blob/master/sound.js

const audioCtx = new AudioContext();
// multiple oscillators can use this one context

function playNote(e) {
  // example usage: <body onmousemove="playNote(event)" style="width: 100vw; height: 100vh;"></body>
  // can play another note simultaneously with another playNote(e) call
  const frequency = getFrequencyFromX(e);
  const volume = getVolumeFromY(e);
  const volumeSetup = audioCtx.createGain();
  volumeSetup.connect(audioCtx.destination);
  volumeSetup.gain.value = volume;
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  oscillator.connect(volumeSetup);
  // instead of oscillator.connect(audioCtx.destination);
  oscillator.start();
  const delayThatAvoidsCrazyReverbs = 0.1;
  oscillator.stop(audioCtx.currentTime + delayThatAvoidsCrazyReverbs);
}

function getFrequencyFromX(e) {
  const screenWidth = e.currentTarget.offsetWidth;
  const x = e.clientX;
  const minComfyFreq = 100;
  const maxComfyFreq = 400;
  const frequency = normalize(x, 
                              0,screenWidth, 
                              minComfyFreq,maxComfyFreq);
  return frequency;
}

function getVolumeFromY(e) {
  // technically getting gain (which ranges 0 to 1)
  const screenHeight = e.currentTarget.offsetHeight;
  const y = e.clientY;
  const minComfyVolume = 0;
  const maxComfyVolume = 0.5;
  const volume = normalize(y, 
                           0,screenHeight, 
                           minComfyVolume,maxComfyVolume);
  return volume;
}

function normalize(value, inMin,inMax, outMin,outMax) {
  const inputBias = value - inMin;
  const ratioAdjustment = (outMax - outMin) / (inMax - inMin);
  const outputBias = outMin;
  return inputBias * ratioAdjustment + outputBias;
}
