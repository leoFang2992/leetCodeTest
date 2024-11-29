/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // arr[len-1] + arr[0]  double arr  
    //O(n)
    
    if ( s.length !== goal.length ) {
        return false;
    }
    // let temp = s + s;
    // if ( temp.includes(goal) ) {
    //     return true;
    // }
    // return false;
    return (s+s).includes(goal);
};
// @lc code=end

