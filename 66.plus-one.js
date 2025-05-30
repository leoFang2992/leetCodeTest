/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let  addNumber = 1;
    let i = 1;
    while (addNumber > 0) {
        addNumber = 0;
        if(digits[digits.length- i] === 9) {
            digits[digits.length- i] = 0;
            if(digits.length === i ) {
                digits.unshift(0);
            }
            addNumber = 1;
        }else {
            digits[digits.length- i] += 1
        }
        i += 1;
    }
    return digits;
};
// @lc code=end

