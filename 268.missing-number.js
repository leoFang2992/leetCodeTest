/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //sort ;  loop ; if nums[i] !== i return i

    // ^ 异或  0 ^ num = num;   num ^ num = 0;  [3,0,1]  =>  res =  3^0^3^1^0^2^1 = 2  
    let res = 0;
    res = res ^ nums.length;
    for(let i = 0; i<nums.length;i++) {
        res = res ^ i ^ nums[i]
    }
    return res;
};
// @lc code=end

