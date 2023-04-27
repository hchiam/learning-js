// https://leetcode.com/problems/longest-consecutive-sequence/description/
// e.g.: given [100,4,200,1,3,2,5,7] --> notice [1,2,3,4,5] --> output 5

/**
 * @param {number[]} nums
 * @return {number}
Required: Ot(n)
Idea 1: Scan array to make HT Os(n). Scan again to check sequences, while incrementing any "adjacent" HT keys. Increment running global max. --> doesn't work because the first side of the seq won't update later.
Idea 2: DP table? but how? maybe try other things first to get ideas and build up intuition.
Idea 3: what if sorted first? would that help get started on ideas? can easily see which are consecutive --> we can scan to filter out non-consecutive directly. But then how might we get seq length without sorting?
Idea 4: filter out non-consecutives. Then DP table somehow?
    Doesn't always work
Idea 5: clever trick in the Editorial: sequences must start with a number, with no other number before it, so you can avoid quadratic time by only checking those sequences, thus achieving Ot(n).
 */
var longestConsecutive = function(nums) {
    if (!nums || !nums.length) return 0;
    
    const ht = {}; // Os(n)
    nums.forEach(n => ht[n] = true); // Ot(n)
    nums = Array.from( // turn back from Set to Array Ot(n)
        new Set( // unique consecutives only Ot(n)
            nums.filter(n => n-1 in ht || n+1 in ht) // Ot(n)
        )
    );

    // DP strat with only checking sequences with proper starts:
    return dp(nums);
};

/** assumes nums are unsorted but unique and consecutives only */
function dp(nums) {
    // traditional DP table would be Ot(n^2), so not BCR req'ed by Q
    // we need Ot(n) so use HT + Editorial strat: only check sequences with a "proper" start: only if no preceding number in HT
    
    // set up hash table to save on time: Ot(n) Os(n)
    const ht = {}; // Os(n)
    nums.forEach(n => ht[n] = true); // Ot(n)
    
    let globalMax = 1;
    nums.forEach(n => {
        if (!(n-1 in ht)) { // this makes while loop not go quadratic
            let pointer = n;
            while (pointer + 1 in ht) pointer++;
            globalMax = Math.max(globalMax, pointer - n + 1);
        }
    });

    return globalMax;
}
