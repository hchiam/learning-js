function playSound(filePath, volume /* 0 to 1 */) {
  const audio = new Audio(filePath);
  if (volume) audio.volume = volume;
  audio.play();
}
