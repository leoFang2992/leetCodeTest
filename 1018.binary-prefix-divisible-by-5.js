/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    //loop len<=100000超限
    let res = [];
    const len = nums.length;
    let temp = 0;
    // for (let i = 0; i < len; i++) {
    //     temp  = temp*2 + nums[i]
    //     if(temp === 0 || temp%5 === 0) {
    //         res.push(true);
    //     } else {
    //         res.push(false);
    //     }
    // }
    // return res;
    
    for (let i = 0; i < len; i++) {
        temp = ((temp << 1) + nums[i]) % 5;
        res.push(temp === 0)
    }
    return res;

};
// @lc code=end

