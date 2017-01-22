var sentenceToParse = "Hi my name is Bob."
console.log('sentenceToParse = ' + sentenceToParse);

var myRegex = /name is (.+)[.]/; // match should get name
console.log('myRegex = ' + myRegex);

var found = sentenceToParse.match(myRegex);
console.log('found = ' + found);

if (found !== null) {
    for(var i=0; i<found.length; i++) {
        console.log('found[' + i + '] = ' + found[i]);
    }
}