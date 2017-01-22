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

console.log('\nAnother example:');

function myClassDef(initVar) {
	this.var = initVar;
	this.myFun = function(param) {
		this.var = param + " " + this.var;
		return this.var;
	};
}

myInstance = new myClassDef("Alex");
console.log(myInstance.myFun("hi"));