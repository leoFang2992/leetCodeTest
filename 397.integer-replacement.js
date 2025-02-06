/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    // n   2 ** k 贪婪 or 动态规划
    let res = 0;
    if (n === 1) {
        return 0;
    } 

    while(n > 1) {
        if(n === 3) {
            n--;
        } else {
            if( n % 2 ===0 ) {
                n >>>= 1;
            }else {
                n = (n + 1) % 4 === 0 ? n+1 : n-1; 
            }
        }
        res ++;
    }
    return res;
    
};
// @lc code=end

