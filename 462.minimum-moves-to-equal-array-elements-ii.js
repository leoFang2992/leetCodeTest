/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let res = 0;
    
    let x = nums[Math.floor(len/2)];
    for (let i = 0; i < len; i++) {
        res += Math.abs(nums[i] - x);
    }
    return res;
};
// @lc code=end

