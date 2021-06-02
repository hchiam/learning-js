// https://stackoverflow.com/questions/1759987/listening-for-variable-changes-in-javascript
// get and set keywords are not supported in Internet Explorer 8 or earlier

var x = {
  aInternal: 10,
  setAListener: function (val) {},
  getAListener: function () {},
  set a(val) {
    this.aInternal = val;
    this.setAListener(val);
  },
  get a() {
    this.getAListener();
    return this.aInternal;
  },
  setA(val) {
    // backwards compatible
    this.aInternal = val;
    this.setAListener(val);
  },
  getA() {
    // backwards compatible
    this.getAListener();
    return this.aInternal;
  },
  registerSetListener: function (listener) {
    this.setAListener = listener;
  },
  registerGetListener: function (listener) {
    this.getAListener = listener;
  },
};

x.registerSetListener(function (val) {
  console.log("Someone set the value of x.a to " + val);
});

x.registerGetListener(function () {
  console.log("Someone read the value of x.a");
});

x.a;
x.a = 1;
x.getA();
x.setA(2);
