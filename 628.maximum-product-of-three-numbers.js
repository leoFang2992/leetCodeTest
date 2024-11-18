/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let res1 = 0;
    let res2 = 0;
    nums.sort((a,c) => c-a );
    let l = nums.length;
    res1 = nums[0]*nums[1]*nums[2];
    res2 = nums[0]*nums[l-2]*nums[l-1];
    return res1>res2?res1:res2;    
};
// @lc code=end

