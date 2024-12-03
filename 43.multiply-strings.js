/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //bigInt
    let temp1 = BigInt(num1);
    let temp2 = BigInt(num2);
    if(temp1 === 0n || temp2 === 0n) {
        return "0";
    }else{
        return (temp1*temp2).toString();
    }

};
// @lc code=end

