/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //loop O(n*n)
    let res= [];
    let len = matrix.length;
    for(let i = 0; i< len; i++){
        for (let j = 0; j< len; j++) {
            if(!res[j]) {
                res[j] = [];
            }
            res[j].unshift(matrix[i][j]);
        }
    }
    //modify matrix
    for(let i=0; i< len; i++) {
        for (let j =0 ; j<len; j++) {
            matrix[i][j] = res[i][j];
        }
    }


    
};
// @lc code=end

