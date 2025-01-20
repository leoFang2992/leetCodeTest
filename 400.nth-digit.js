/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    //
    let res = 0;
    let temp = "";
    for (let i = 1; i <= n; i++) {
        temp += i; 
    }
    res += temp[n-1]; 
};
// @lc code=end

