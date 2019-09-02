// custom iterators tutorial video: https://www.youtube.com/watch?v=eBhDBy-M7ow

/*
 * This will make [..."hey"] evaluate to ["NOPE!", "NOPE!", "NOPE!"]
 */
String.prototype[Symbol.iterator] = function() {
    let count = this.length;
    return {
        next() {
            if (count > 0) {
                count--;
                return { done: false, value: "NOPE!" };
            }
            // DON'T FORGET TO EVENTUALLY RETURN done: true!!!
            return { done: true };
        }
    };
}

/*
 * This makes this possible: [...range(1,4,1)]
 */
function range(start=1, end=10, step=1) {
    let current = start;
    return {
        [Symbol.iterator]: function() {
            return {
                next() {
                    let result = { done: false, value: current };
                    if (current <= end) {
                        current += step;
                        return result;
                    }

                    return { done: true };
                }
            };
        }
    };
}
