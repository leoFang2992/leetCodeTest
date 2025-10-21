/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    //init res [[]];
    let res = new Array(n);
    for(let i=0; i<n;i++) {
        res[i] = new Array(n);
    }

    let num = 1;
    //matrix limit
    let left = 0; 
    let right = n-1; 
    let top = 0;
    let bottom = n-1;

    while (num <= n*n) {
        //top left to right
        for(let i = left; i<=right; i++) {
            res[top][i] = num;
            num++;
        }
        top++;
        // right top to bottom
        for(let i = top; i<= bottom;i++) {
            res[i][right] = num;
            num++
        }
        right--;
        //bottom right to left
        for(let i = right; i>= left; i--) {
            res[bottom][i] = num;
            num++
        }
        bottom--;
        //left bottom to top
        for(let i = bottom; i>= top; i--) {
            res[i][left] = num;
            num++;
        }
        left++;


    }
    return res;
};
// @lc code=end

