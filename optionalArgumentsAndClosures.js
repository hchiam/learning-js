function addTogether() {
  var sum = 0;
  
  // go through each item in arguments
  for(i=0; i<arguments.length;i++){
    if (typeof arguments[i] !== "number") return undefined;
    sum += arguments[i];
  }
  
  // e.g. if addTogether(2,4) :
  if (arguments.length !== 1) {
    return sum;
    
  } else { // e.g. if addTogether(1) :
    return function() {
      for(i=0; i<arguments.length;i++){
      if (typeof arguments[i] !== "number") return undefined;
        sum += arguments[i];
      }
      return sum;
    };
  }
}

addTogether(1)(2,4); // should return 7