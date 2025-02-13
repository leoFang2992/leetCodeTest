/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const s = num.toString();
    let maxI = s.length-1;
    let p = -1; q = 0;
    for( let i = s.length-2; i>= 0; i--) {
        if(s[i] > s[maxI]) {
            maxI = i;
        } else if( s[i] < s[maxI]) {
            p = i;
            q = maxI;
        }
    }
    //dec
    if ( p === -1) {
        return num;
    }
    let t = s.split("");
    [t[p], t[q]] = [t[q], t[p]]
    // return parseInt(t.join(''));
    return Number(t.join(""));
};
// @lc code=end

