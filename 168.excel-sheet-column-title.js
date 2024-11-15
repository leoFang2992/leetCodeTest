/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    if(columnNumber <= 0) {
        return ''
    }

	let res = [];
    while(columnNumber>0) {
        columnNumber--; //余数对应；1-26 to 0-25 没有0
        let remain = columnNumber%26;
        res.unshift(String.fromCharCode(remain + 65 ));
        columnNumber = Math.floor(columnNumber  / 26);
    }
  
  
    return res.join('');
};
// @lc code=end

