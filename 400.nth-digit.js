/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    //
    let res = 0;

    let len = 1;
    let start = 1;
    let end = 9;
    while ( n > len * end ) {
        n = n - len * end;
        len ++;
        start *= 10;
        end *= 10 
    }
    let num  =  start + Math.floor( (n-1)/len )
    num = num.toString();
    res = Number(num[ (n-1)%len ]);
    return res;

};
// @lc code=end

