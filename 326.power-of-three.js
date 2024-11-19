/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //转化成3进制
    if (n <= 0 || n === 2) {
        return false;
    }
    if ( n === 1) {
        return true;
    }
    let temp = n.toString(3);
    if (temp[0] == '2') {
        // 最高位为2的情况；
        return false;
    }
    for ( let i = 1; i < temp.length; i++ ) {
        if(temp[i] !== '0' ) {
            return false;
        }
    }
    return true;
};
// @lc code=end

