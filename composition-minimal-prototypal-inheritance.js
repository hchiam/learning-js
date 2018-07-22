const prototype = {property:'val'}

const myObject = function(options) {
  return Object.assign({},prototype,options)
}

o = myObject({property:'custom value'})

alert(o.property)
