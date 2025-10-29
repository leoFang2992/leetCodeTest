/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const res = new Array(target+1).fill(0);
    res[0] = 1;
    for(let i = 1; i< target+1; i++) {
        for(let num of nums) {
            if(num <= i) {
                res[i] += res[i-num]; 
            }
        }
    }

    return res[target];
};
// @lc code=end

