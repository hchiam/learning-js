/**
 * notes: https://github.com/hchiam/learning-union-find
 *
 * example use:
 *
 * var set1 = new SetNode(1, "Set 1");
 * var child = new SetNode("a");
 * child.parent = set1;
 *
 * var set2 = new SetNode(2, "Set 2");
 * var child2 = new SetNode("b");
 * child2.parent = set2;
 *
 * set1.unionInto(set2);
 * console.log(set1.getNameOfSetImIn());
 */

function SetNode(value, setName = value) {
  this.value = value;
  this.parent = null;
  this.setName = setName;
}

SetNode.prototype = {
  constructor: SetNode,

  getNameOfSetImIn: function () {
    if (!this.parent) {
      return this.setName;
    }
    return this.parent.getNameOfSetImIn();
  },

  unionInto: function (setToMergeInto) {
    // TODO: detect taller tree, merge into that one
    // for now: merge this set into setToMergeInto
    this.setName = null;
    if (!this.parent) {
      this.parent = setToMergeInto;
    } else {
      this.parent.unionInto(setToMergeInto);
    }
  },

  printProps: function () {
    console.log();
    console.log("Value: " + this.value);
    console.log(this.parent !== null ? "has parent" : "(no parents)");
    console.log("Set: " + this.getNameOfSetImIn());
  },
};

// exampleUsage();

function exampleUsage() {
  const set1 = new SetNode("Set 1");
  const child1 = new SetNode("a");
  child1.parent = set1;

  const set2 = new SetNode("Set 2");
  const child2 = new SetNode("b");
  child2.parent = set2;

  set1.unionInto(set2);
  console.log(set1.value + " is now in the set " + set1.getNameOfSetImIn());
}

module.exports = {
  SetNode,
};
