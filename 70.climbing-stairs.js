/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //dp 

    // Plan A simply
    // const res = new Array(n).fill(0);
    // res[0] = 1;
    // res[1] = 2;

    // for (let i = 2; i< n; i++ ) {
    //     res[i] = res[i-1] + res[i-2];
    // }
    // return res[n-1]

    //Plan B store 3 number instead of length n array\
    let firstNum = 0;
    let secondNum = 0;
    let res = 1;
    for(let i = 1; i <= n; i++) {
        firstNum = secondNum;
        secondNum = res;
        res = firstNum + secondNum;
    }
    return res;
};
// @lc code=end

