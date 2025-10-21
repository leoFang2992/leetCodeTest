/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //dp 
    //init all as 0
    const res = Array.from({length:m},() => Array(n).fill(0));

    //Limit condition: first column and line as 1
    for(let i = 0; i< m; i++) {
        res[i][0] =1;
    }
    for(let i=0; i< n; i++) {
        res[0][i] = 1;
    }
    //res[m,n] = res[m-1,n] + res[m,n-1]
    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            res[i][j] = res[i-1][j] + res[i][j-1]
        }
    }
    return res[m-1][n-1];
    
};
// @lc code=end

