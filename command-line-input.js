/*
You can use this JavaScript file in command line CLI.
For example, enter this command:
node command-line-input.js
Key things to remember: process.openStdin()/exit() and addListener('data',...)
*/

const hi = () => {
  console.log(`Hi! This is a CLI app written in JS.

To exit, hit Ctrl+C or Command+C.

Enter something:`);
};

hi();

const stdin = process.openStdin();
stdin.addListener("data", (data) => {
  const line = data.toString().trim(); // remove newline at end
  const userSaidBye = line.match(/[good ?]?bye/i);
  console.log(`\n You entered: ${line}\n`);
  if (!userSaidBye) {
    console.log("Say something again:");
  } else {
    console.log("Bye!\n");
    process.exit();
  }
});
