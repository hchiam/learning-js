// // in CJS syntax:
// const {
//   MinPriorityQueue,
//   MaxPriorityQueue,
// } = require("@datastructures-js/priority-queue");

var MedianFinder = function() {
    this.above = new MinPriorityQueue();
    this.below = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.below.enqueue(num); // remember: this will sort too!
    this.above.enqueue(this.below.dequeue().element); // so below =< above
    // extra number starts at above, but then balance lengths as needed:
    if (this.above.size() > this.below.size()) {
        this.below.enqueue(this.above.dequeue().element);
        // so now above and below either have same size, or below is longer
        // (think of first number to convince yourself)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.above.size() === this.below.size()) {
        // even:
        return (
            this.above.front().element
            +
            this.below.front().element
        ) / 2;
    } else { // addNum guarantees only below can be longer than above
        // odd is the imbalance:
        return this.below.front().element;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
