const { MinHeap: VERBOSE_MinHeap } = require("./minHeap");
const { MinHeap: SIMPLER_MinHeap } = require("./minHeap.simpler");

describe("VERBOSE MinHeap implementation", () => {
  it("works", () => {
    const heap = new VERBOSE_MinHeap();
    heap.insert(5);
    heap.insert(4);
    heap.insert(8);
    heap.insert(6);
    heap.insert(1);
    heap.insert(14);
    heap.insert(2);
    heap.insert(7);

    expect(heap.remove()).toBe(1);
    expect(heap.remove()).toBe(2);
    expect(heap.remove()).toBe(4);
    expect(heap.remove()).toBe(5);
    expect(heap.remove()).toBe(6);
    expect(heap.remove()).toBe(7);
    expect(heap.remove()).toBe(8);
    expect(heap.remove()).toBe(14);
  });
});

describe("SIMPLER MinHeap implementation", () => {
  it("works", () => {
    const heap = new SIMPLER_MinHeap();
    heap.add(5);
    heap.add(4);
    heap.add(8);
    heap.add(6);
    heap.add(1);
    heap.add(14);
    heap.add(2);
    heap.add(7);

    expect(heap.pop()).toBe(1);
    expect(heap.pop()).toBe(2);
    expect(heap.pop()).toBe(4);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(6);
    expect(heap.pop()).toBe(7);
    expect(heap.pop()).toBe(8);
    expect(heap.pop()).toBe(14);
  });
  it("works with custom callback", () => {
    const heap = new SIMPLER_MinHeap((a, b) => a[0] - b[0]);
    heap.add([5, "a"]);
    heap.add([4, "b"]);
    heap.add([8, "c"]);
    heap.add([6, "d"]);
    heap.add([1, "e"]);
    heap.add([14, "f"]);
    heap.add([2, "g"]);
    heap.add([7, "h"]);

    expect(heap.pop()[0]).toBe(1);
    expect(heap.pop()[0]).toBe(2);
    expect(heap.pop()[0]).toBe(4);
    expect(heap.pop()[0]).toBe(5);
    expect(heap.pop()[0]).toBe(6);
    expect(heap.pop()[0]).toBe(7);
    expect(heap.pop()[0]).toBe(8);
    expect(heap.pop()[0]).toBe(14);
  });
});
