mandatory = () => {
  throw new Error("Missing parameter!");
};

foo = (bar = mandatory()) => {
  console.log("mandatory parameters filled properly");
  return bar;
};

foo("value given");

foo(); // value not given
