/*
 * @lc app=leetcode id=372 lang=javascript
 *
 * [372] Super Pow
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    let res = 0n;
    let temp = 0
    for (let i = 0; i< b.length; i++) {
        temp  = 10 * temp + b[i]; 
    }
    res = (Math.pow(a,temp))%1337;

    return res;
};
// @lc code=end

