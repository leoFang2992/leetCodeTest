/*
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    //9*9*8*7  
    if (n === 0) return 1
    if (n === 1) return 10
    let res = 9; // first digit 1-9
    for (let i = 0; i< n -1; i++) {
        res *= (9-i);
    }
    res += countNumbersWithUniqueDigits(n-1);
    return res;
};
// @lc code=end

