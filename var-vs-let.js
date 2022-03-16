// https://stackoverflow.com/a/11444416

varIsFunctionScoped_letIsClosureScoped();
varIsHoisted_letIsNot();
varCanBecomeGlobal_letCannot();
varCanBeRedeclared_letCannot();

function varIsFunctionScoped_letIsClosureScoped() {
  // the following has a closure:
  {
    var innerVar = "CAN get";
    let innerLet = "can't get";
  }

  console.log(innerVar);

  try {
    console.log(innerLet);
  } catch (e) {
    console.log("can't read innerLet");
  }
}

function varIsHoisted_letIsNot() {
  console.log(hoistedVar, "<-- undefined but variable already exists");
  try {
    console.log(unhoistableLet);
  } catch (e) {
    console.log("can't read unhoistableLet");
  }

  var hoistedVar = "CAN get";
  let unhoistableLet = "can't get";
}

var globalVar = "CAN get";
var scopedLet = "can't get";
function varCanBecomeGlobal_letCannot() {
  if (typeof window !== "undefined") {
    console.log("window.globalVar", window.globalVar);
    console.log("window.scopedLet", window.scopedLet);
  } else {
    console.log(`
Try this in a browser console:
var globalVar = "CAN get";
var scopedLet = "can't get";
console.log("window.globalVar", window.globalVar);
console.log("window.scopedLet", window.scopedLet);
`);
  }
}

function varCanBeRedeclared_letCannot() {
  var redeclarableVar = "original var value";
  var redeclarableVar = "redeclared var value";
  console.log(redeclarableVar);

  console.log(`
You can't even run this code (SyntaxError):
let letWithLetKeyword = "original let value";
let letWithLetKeyword = "redeclared let value";
`);
}
