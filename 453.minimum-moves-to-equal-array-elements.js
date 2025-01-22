/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) { 
    const min = Math.min(...nums);
    let res = 0;
    for (let num of nums) {
        res += num-min;
    }
    return res;
};
// @lc code=end

