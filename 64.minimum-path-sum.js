/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //init
    let m = grid.length;
    let n = grid[0].length;
    const res = Array.from({length:m},() => Array(n).fill(0));
    res[0][0] = grid[0][0]
    //limit condition
    for(let i = 1; i< m; i++) {
        res[i][0] =  res[i-1][0] + grid[i][0];
    }
    for(let i = 1; i< n; i++) {
        res[0][i] = res[0][i-1] + grid[0][i];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            res[i][j] = Math.min(res[i-1][j],res[i][j-1]) + grid[i][j]
        }
    }
    return res[m-1][n-1];
};
// @lc code=end

