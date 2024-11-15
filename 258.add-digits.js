/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) {
        return num;
    }
    //模拟法
    // let myFunc = num => Number(num);
    // let res = num;
    // while(res >= 10) {
    //     let temp = Array.from(String(res), myFunc);
    //     res = temp.reduce((a,c)=> a + c );
    // }
    // return res;

    //math  %9  1+9 = 1+0
    return num%9 || 9
};
// @lc code=end

