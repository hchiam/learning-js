var a = {
  b: 1,
  s: function () {
    setTimeout(function () {
      alert("hi " + this.b);
    }, 1000);
  },
};
a.s(); // hi undefined

a = {
  b: 1,
  s: function () {
    setTimeout(
      function () {
        alert("hi " + this.b);
      }.bind(this),
      1000
    );
  },
};
a.s(); // hi 1

// memory aid: this refers to parent at the time it is run, not created
/* ramifications: 
this with no parent = global
this in object = parent
this in setTimeout = not object but whatever at time of running
this of new object = not the prototype function it's created in but the object it's in at run time */
