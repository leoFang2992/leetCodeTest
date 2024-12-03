/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // O(logN) 
    //2*5 = 10 =>  n/5  /5 /5;   
    let res = 0;
    if(n === 0) return res;
    let temp = n;
    while ( temp >= 5) {
        temp = Math.floor(temp/5);
        res += temp;
    } 
    return res;
};
// @lc code=end

