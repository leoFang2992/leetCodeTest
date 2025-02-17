/*
 * @lc app=leetcode id=754 lang=javascript
 *
 * [754] Reach a Number
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let res = Math.abs(target);
    let k = 0;
    while( res > 0 ) {
        k++;
        res -= k;
    }
    return res % 2 === 0 ? k : k + 1 + k % 2;

};
// @lc code=end

