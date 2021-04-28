function randomAlphaNum(length) {
  const result = [];
  const allowedCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const numberOfOptions = allowedCharacters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      allowedCharacters.charAt(Math.floor(Math.random() * numberOfOptions))
    );
  }
  return result.join("");
}

console.log(randomAlphaNum(17));
