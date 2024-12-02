/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    //1. loop 暴力计算
    let res = [];
    for( let i = left; i <= right; i++  ) {
        
        if ( isSelfDividing(i) ) {
            res.push(i);
        }
    }
    return res;
};

const isSelfDividing = (num) => {
    let temp = num;
    while( temp > 0) {
        const digit = temp %10;
        if(digit === 0 || num % digit !== 0) {
            return false;
        }
        temp = Math.floor(temp / 10);
    }
    return true;
};


// @lc code=end

