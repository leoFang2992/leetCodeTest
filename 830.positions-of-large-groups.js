/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    //loop string  s[i] s[i+1]

    let res = [];
    let start = 0;
    for( let i = 0 ; i< s.length; i++) {
        if(s[i] != s[i+1]) {
            if( i - start >= 2 ) {
                res.push([start,i]);
            }
            start  = i + 1;
        }
    }
    return res;
};
// @lc code=end

