/*
You can use this JavaScript file in command line CLI. 

For example, enter this command: 
node command-line-args.js param1 param2=something

The key thing to remember is this array: process.argv
*/

var arrayOfArguments = process.argv;
console.log("arrayOfArguments:", arrayOfArguments);

// first arg: path to node
// second arg: path to current .js file
// later args: what you typed afterwards in the command, separated by spaces
process.argv.slice(2).forEach(function (rawArgumentString) {
  console.log(rawArgumentString + " (" + typeof rawArgumentString + ")");
});

// node command-line-args.js hi

function printHi() {
  console.log("\nHi! You found me :)\n");
}

if (arrayOfArguments[2] === "hi") {
  printHi();
}
