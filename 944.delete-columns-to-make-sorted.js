/*
 * @lc app=leetcode id=944 lang=javascript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    //loop
    const row = strs.length;
    const col = strs[0].length;
    let res = 0
    for( let i = 0; i < col; i++ ) {
        for (let j = 1; j < row; j++) {
            if (strs[j-1][i] > strs[j][i]) {
                res ++;
                break;
            }
        }
    }
    return res;

};
// @lc code=end

