/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    //Plan A dp 
    // const res = new Array(len+1);
    // res[0] = 0;
    // res[1] = 0;
    // for(let i = 2; i<= len; i++) {
    //     res[i] = Math.min( res[i-1]+ cost[i-1], res[i-2]+cost[i-2]) 
    // }
    // return res[len]

    //Plan B static Num instead of Array

    let prev = 0;
    let curr = 0;
    for(let i = 2; i <= len; i++) {
        let next = Math.min(curr + cost[i-1], prev + cost[i-2]);
        prev = curr;
        curr = next;
    }
    return curr;

};
// @lc code=end

