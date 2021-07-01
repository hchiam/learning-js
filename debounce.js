function debounce(theFunction, timeout = 100) {
  /**
   * usage:
   * const doSomethingDebounced = debounce(() => doSomething());
   * doSomethingDebounced();
   *
   * or:
   * debounce(()=>{doSomething()})();
   */
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      theFunction.apply(this, args);
    }, timeout);
  };
}
