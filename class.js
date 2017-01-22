// (see my prototype code for another example)
// Terminal: node class.js

function myClass(myVar) { // function className(initVars)
    this.myVar = myVar; // this.varName
    this.get = function() { // this.funcName = function(params)
        return this.myVar; // return this.varName
    };
}

test = new myClass(2); // new className(initVars)
console.log('test = new myClass(2);');
console.log('test.get() = ' + test.get());