/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 3 , divide n to number of 3 to make the product maximize.  O(logN)
    let res = 1;
    if (n < 4) return n-1;

    let courtOf3 = Math.floor(n/3)
    let rem = n%3

    switch(rem){
        case 0:
            res = 3**courtOf3;
            break;
        case 1:
            res = 3**(courtOf3-1)*4;
            break;
        case 2:
            res = 3**(courtOf3)*2;
            break;
    }
    return res;
};
// @lc code=end

