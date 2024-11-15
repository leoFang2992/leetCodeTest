/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false;
    }
    //2进制转化
    let temp = n.toString(2);
    for(let i = 1; i<temp.length;i++) {
        if(temp[i] !== '0') {
            return false;
        }
    }
    return true;
};
// @lc code=end

