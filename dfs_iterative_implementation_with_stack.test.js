const {
  dfs_iter_post_order,
  Node,
} = require("./dfs_iterative_implementation_with_stack.js");

describe("DFS iteratively, with post order", () => {
  it("works", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    f.left = g;
    f.right = h;

    const expected = "debghfca";
    let actual = "";
    dfs_iter_post_order(a, (n) => {
      actual += n.value;
    });

    expect(actual).toBe(expected);
  });
});
