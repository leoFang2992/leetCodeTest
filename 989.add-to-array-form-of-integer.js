/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    //Number 超限
    let res = [];
    // let temp = Number(num.join('')) + k;
    // res = temp.toString().split('').map(Number)
    // return res;
    let len = num.length;
    for(let i = len-1; i >= 0 || k>0; i--, k = Math.floor(k / 10)) {
        if(i>=0) {
            k += num[i];
        }
        res.push(k % 10);
    }
    res.reverse();
    return res;

};
// @lc code=end

