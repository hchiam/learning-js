function hasChineseCharacter(text) {
  return !!text.match(/\p{Script=Han}/u);
}
