/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //边界判断
    let res = 0;

    if (x< 0) {
        res = parseInt(x.toString().slice(1).split('').reverse().join(''))*(-1);
    } else{
        res = parseInt(x.toString().split('').reverse().join(''));
    }

    if(res > Math.pow(2,31)-1 || res < -Math.pow(2,31)) {
        return 0;
    }

    return res;
};
// @lc code=end

