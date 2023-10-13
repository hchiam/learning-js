const batman = {
  secretIdentity: 'Bruce Wayne'
};

const realName = batman.secretIdentity;

Object.defineProperty(batman, 'secretIdentity', {
  enumerable: false,
  configurable: false,
  set: function(password) {
    if (password === "'puter") {
      console.log('nananananananananananananananananananananananana');
      console.log('PASSWORD ACCEPTED.');
      console.log("BATMAN'S SECRET IDENTITY:");
      console.log(realName);
      console.log("https://www.youtube.com/watch?v=gZjjrlrce6A");
      console.log('nananananananananananananananananananananananana');
    }
  },
});

console.log(batman.secretIdentity = "'puter");
