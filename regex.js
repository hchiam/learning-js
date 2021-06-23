// terminal command: node regex.js

//var sentenceToParse = "Hi my name is Bob."
var sentenceToParse = "Hi my name is Bob. Your name is Carla.";
console.log("sentenceToParse = " + sentenceToParse);

//var myRegex = /name is (.+)\./; // match should get name
var myRegex = /name is (.+)\./g; // [1] match should get name
console.log("myRegex = " + myRegex);

var found = sentenceToParse.match(myRegex);
console.log("found = " + found);

if (found !== null) {
  for (var i = 0; i < found.length; i++) {
    console.log("found[" + i + "] = " + found[i]);
  }
}

// another example

var text = "-5. -2 3.1415 test +89 12.44 0.5 .7";
var re = /[-+]?\d*\.?\d+/g; // find all matches of this regex (/.../g)
var textMatch = text.match(re);
console.log(text);
console.log(textMatch);
