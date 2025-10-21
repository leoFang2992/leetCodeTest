/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for(let i = 0; i< nums.length; i++) {
        if(i > max) {
            return false;
        }
        max = Math.max(max, i+nums[i])
    }
    return true;
};
// @lc code=end

