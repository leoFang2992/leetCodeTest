/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let res = [];
    let lo = 0;
    let hi = s.length;
    for(let i = 0; i< s.length; i++) {
        res[i] = s[i] === "I" ? lo++ : hi--;
    }
    res[s.length] = lo;
    return res;
};
// @lc code=end

