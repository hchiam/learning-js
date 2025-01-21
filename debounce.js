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
