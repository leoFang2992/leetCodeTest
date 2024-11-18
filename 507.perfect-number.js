/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    //欧拉定理 偶完全数 6, 28, 496, 8128, 33550336
    // return num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336; 
    // 枚举
    if (num === 1) {
         return false;
    }

    let res = 1;
    for (let i = 2; i*i <= num; ++i) {
        if(num % i === 0) {
            res += i;
            if (i*i < num) {
                res += Math.floor(num/i);
            }
        }
    }
    return res === num;
};
// @lc code=end

