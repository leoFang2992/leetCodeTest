/*
 * @lc app=leetcode id=3693 lang=javascript
 *
 * [3693] Climbing Stairs II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    //dp PLAN A
    // const res = new Array(n+1).fill(0);
    // for(let i = 1; i <= n; i++) {
    //    let minCost = Infinity;

    //    let minStart = Math.max(i-3, 0);
    //    for(let j = minStart; j < i; j++) {
    //     minCost = Math.min(minCost, res[j] + costs[i - 1] + (i - j) * (i - j));
    //    }

    //    res[i] = minCost;
    // }
    // return res[n]

    //PLAN B
    let prev1 = Infinity;
    let prev2 = Infinity;
    let curr = 0;
    for(let i = 1; i <= n; i++) {
        let next = Math.min( Math.min(prev2 + 9, prev1 + 4) , curr + 1) + costs[i-1];
        prev2 = prev1;
        prev1 = curr;
        curr = next;
    }
    return curr;
};
// @lc code=end

