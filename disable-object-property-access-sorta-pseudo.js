const batman = {
  secretIdentity: 'Bruce Wayne'
};

const realName = batman.secretIdentity;

Object.defineProperty(batman, 'secretIdentity', {
  enumerable: false,
  configurable: false,
  set: function(password) {
    if (password === "'puter") {
      console.log('nana');
      console.log('PASSWORD ACCEPTED.');
      console.log("BATMAN'S SECRET IDENTITY:");
      console.log(realName);
    }
  },
});

console.log(batman.secretIdentity = "'puter");
