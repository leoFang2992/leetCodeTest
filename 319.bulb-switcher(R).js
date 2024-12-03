/*
 * @lc app=leetcode id=319 lang=javascript
 *
 * [319] Bulb Switcher
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // odd divide bulb on; count square num in [1, n]
    
    // O(n*n) double loop 超时
    return Math.floor(Math.sqrt(n));
};
// @lc code=end

