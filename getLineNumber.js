console.log(
  new Error().lineNumber || /:(\d+):(\d+)/.exec(new Error().stack)?.[1]
);
