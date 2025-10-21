/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //start block
    if(obstacleGrid[0][0] === 1) return 0; 

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    //init
    const res = Array.from({length:m},() => Array(n).fill(0));
    res[0][0] = 1;
    //limit
    for(let i =1; i < m; i++) {
        res[i][0] = obstacleGrid[i][0] == 1 || res[i-1][0] == 0 ? 0 : 1;
    }
    for(let i =1; i < n; i++) {
        res[0][i] = obstacleGrid[0][i] == 1 || res[0][i-1] == 0 ? 0 : 1;
    }
    //dp
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n ;j++) {
            res[i][j] = obstacleGrid[i][j] == 1 ? 0 : res[i-1][j] + res[i][j-1];
        }
    }

    return res[m-1][n-1]

};
// @lc code=end

