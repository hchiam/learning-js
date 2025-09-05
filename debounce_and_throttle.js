/** to cancel previous calls to theFunction (and delay the current call) if it's called again earlier than (timeout) milliseconds */
function debounce(theFunction, timeout = 100) {
  /**
   * usage:
   * const doSomethingDebounced = debounce(() => doSomething());
   * doSomethingDebounced();
   *
   * or:
   * debounce(()=>{doSomething()})(); // REMEMBER the () at the end!
   *
   * or:
   * element.addEventListener('resize', debounce(()=>{doSomething()})); // WITHOUT the () at the end!
   *
   * DON'T DO THIS:
   * element.addEventListener('scroll', ()=>{ debounce(()=>{ ... })(); } ); // this can cause multiple unnecessary calls!
   *
   * For leading/trailing edge options, consider https://davidwalsh.name/javascript-debounce-function
   */
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      theFunction.apply(this, args);
    }, timeout);
  };
}

/** to prevent new calls to theFunction if it's called again earlier than (timeout) milliseconds */
function throttle(theFunction, timeout) {
  /**
   * const throttledHandler = throttle(()=>{console.log('called')}, 1000);
   *
   * throttledHandler();
   * setTimeout(()=>{
   *  throttledHandler();
   * },500);
   * // this will only print once
   *
   * throttledHandler();
   * setTimeout(()=>{
   *  throttledHandler();
   * },1000);
   * // this will print twice
   */
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= timeout) {
      lastCall = now;
      theFunction.apply(this, args);
    }
  };
}
