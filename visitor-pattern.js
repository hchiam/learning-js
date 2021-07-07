/** 

Visitor pattern = efficiently extend multiple classes in one visitor object,
  without changing the code in the classes themselves.
Especially important in non-dynamic languages.
Lets you do things like add a method to a class without changing the code in the class.
Instead of each class implementing its own version,
  have one place/class to hold new logic,
  and each class should have a visit method to accept a visitor to modify the class.

references:

https://app.memrise.com/course/45312/design-patterns-in-programming/3/

https://www.shieldui.com/blogs/javascript-visitor-design-pattern

https://www.reddit.com/r/explainlikeimfive/comments/ulxk8/eli5_the_visitor_design_pattern/

https://stackoverflow.com/questions/9831415/how-to-implement-visitor-pattern-in-javascript

*/

// run this code: node visitor-pattern.js

// imagine a bunch of target classes like these:
const target = new SomeObject("boat", 25, 350);
const target2 = new AnotherObject("bike", 30);

// and these "visitor objects" which modify classes:
const speedUpVisitor = new SpeedUpVisitor();
const enlargeVisitor = new EnlargeVisitor();
const addWingsVisitor = new AddWingsVisitor();

console.log(`
BEFORE:
${target.getSpeed()}
${target.getSize()}
${target.wings ?? "(no wings)"}
${target2.getSpeed()}
${target2.wings ?? "(no wings)"}
`);

console.log(`
(...visitors modifying objects...)
`);
target.modifyMeWith(speedUpVisitor);
target.modifyMeWith(enlargeVisitor);
target.modifyMeWith(addWingsVisitor);
target2.modifyMeWith(speedUpVisitor);
target2.modifyMeWith(enlargeVisitor);
target2.modifyMeWith(addWingsVisitor);

console.log(`
AFTER:
${target.getSpeed()}
${target.getSize()}
${target.wings ?? "(no wings)"}
${target2.getSpeed()}
${target2.wings ?? "(no wings)"}
`);

function SomeObject(name, speed, size) {
  this.name = name;
  this.speed = speed;
  this.size = size;

  this.modifyMeWith = (object) => object.applyVisitor(this);

  this.getName = () => this.name;
  this.getSpeed = () => this.speed;
  this.setSpeed = (speed) => (this.speed = speed);
  this.getSize = () => this.size;
  this.setSize = (size) => (this.size = size);
}

function AnotherObject(name, speed) {
  this.name = name;
  this.speed = speed;

  this.modifyMeWith = (object) => object.applyVisitor(this);

  this.getSpeed = () => this.speed;
  this.setSpeed = (speed) => (this.speed = speed);
}

function SpeedUpVisitor() {
  this.applyVisitor = function (object) {
    object.setSpeed?.(200 * object.getSpeed?.());
  };
}

function EnlargeVisitor() {
  this.applyVisitor = function (object) {
    object.setSize?.(200 * object.getSize?.());
  };
}

function AddWingsVisitor() {
  this.applyVisitor = function (object) {
    object.wings = "Rocket jet packs!!! :D";
  };
}
