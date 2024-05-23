function isAsyncFunction(fun) {
    const AsyncFunction = (async () => { }).constructor;
    return fun instanceof AsyncFunction && AsyncFunction !== Function;
}

AsyncFunction = (async () => { }).constructor;
function syncFun() { }
async function asyncFun() { }
console.log('syncFun instanceof AsyncFunction: ', syncFun instanceof AsyncFunction);
console.log('asyncFun instanceof AsyncFunction: ', asyncFun instanceof AsyncFunction);
/*
get:
syncFun instanceof AsyncFunction:  true
asyncFun instanceof AsyncFunction:  true
*/
GeneratorFunction = (function* () {}).constructor;
console.log(AsyncFunction !== Function);
console.log(AsyncFunction !== GeneratorFunction);
