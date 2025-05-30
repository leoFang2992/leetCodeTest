/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start 
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //loop reduce width and heigth
    if(matrix.length === 0) return []
    let res = []
    let top = 0;
    let left = 0;
    let bottom = matrix.length-1;
    let right = matrix[0].length-1;

    while(left < right && top < bottom) {
        for(let i = left; i< right; i++) {
            res.push(matrix[top][i]);
        }
        for(let i = top; i<bottom; i++) {
            res.push(matrix[i][right]);
        }
        for(let i = right; i>left; i-- ) {
            res.push(matrix[bottom][i]);
        }
        for(let i = bottom; i>top; i--) {
            res.push(matrix[i][left]);
        }
        top++;
        left++;
        bottom--;
        right--;

    }
    
    if(top === bottom) {
        for (let i = left; i<= right; i++) {
            res.push(matrix[top][i]);
        }
    }else if(left === right) {
        for(let i = top; i<= bottom; i++) {
            res.push(matrix[i][left]);
        }
    }


    return res;
};
// @lc code=end

