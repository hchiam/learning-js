const {
  dfs_iter_post_order,
  Node,
} = require("./dfs_iterative_implementation_with_stack.js");

describe("DFS iteratively, with post order", () => {
  it("works on a bigger example", () => {
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
      actual += n?.value || "";
    });

    expect(actual).toBe(expected);
  });

  it("works on a simple example", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    a.left = b;
    a.right = c;

    const expected = "bca";
    let actual = "";
    dfs_iter_post_order(a, (n) => {
      actual += n?.value || "";
    });

    expect(actual).toBe(expected);
  });

  it("works on a tree with one node", () => {
    const a = new Node("a");

    const expected = "a";
    let actual = "";
    dfs_iter_post_order(a, (n) => {
      actual += n?.value || "";
    });

    expect(actual).toBe(expected);
  });

  it("works on a tree with no nodes", () => {
    const expected = "";
    let actual = "";
    dfs_iter_post_order(null, (n) => {
      actual += n?.value || "";
    });

    expect(actual).toBe(expected);
  });

  it("works on a tree that's more like a linked list", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    a.right = b;
    b.right = c;
    c.right = d;
    d.right = e;
    e.right = f;

    const expected = "fedcba";
    let actual = "";
    dfs_iter_post_order(a, (n) => {
      actual += n.value || "";
    });

    expect(actual).toBe(expected);
  });
});
