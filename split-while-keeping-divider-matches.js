const text = "Visit https://example.com and http://test.com for more info!";
const regexWithoutBrackets = /https?:\/\/[^\s]+/g;
const regexWithBrackets = /(https?:\/\/[^\s]+)/g;

const resultWithoutBrackets = text.split(regexWithoutBrackets);
const resultWithBrackets = text.split(regexWithBrackets);

console.log(resultWithoutBrackets);
// [ "Visit ", " and ", " for more info!" ]

console.log(resultWithBrackets);
// [ "Visit ", "https://example.com", " and ", "http://test.com", " for more info!" ]
