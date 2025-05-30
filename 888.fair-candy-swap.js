/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let res = [];
    const aliceSum = aliceSizes.reduce((a, b) => a+b);
    const bobSum = bobSizes.reduce((a, b) => a+b);
    let ave = (aliceSum - bobSum) /2

    const rec = new Set(aliceSizes);
    for ( const y of bobSizes) {
        const x = y + ave;
        if(rec.has(x)) {
            res = [x, y];
            break;
        }
    }
    return res;

};
// @lc code=end

