/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    const len = triangle.length;
    if(len == 1) return triangle[0][0];

    //PLAN A: nomal dp   set limit;
    //init
    // const res = Array.from({length: len}, (_, i) => Array(i+1).fill(0) );
    // //const res = Array(n).fill(0).map(() => Array(n).fill(0));
    // res[0][0] = triangle[0][0];
    
    // for(let i = 1; i<len ; i++) {
    //     res[i][0] = res[i-1][0] + triangle[i][0];
    //     res[i][i] = res[i-1][i-1] + triangle[i][i];
    //     for(let j = 1; j < i; ++j) {
    //         res[i][j] = Math.min(res[i-1][j-1], res[i-1][j]) + triangle[i][j];
    //     }
    // }
    // // first try , time not perfect
    // // for(let i =2; i< len; i++) {
    // //     for(let j =1; j< i; j++) {
    // //         res[i][j] = Math.min(res[i-1][j-1], res[i-1][j]) + triangle[i][j];
    // //     }
    // // } 
    // return Math.min(...res[len-1]);   


    //PLAN B: space upgrade res[i] only work by res[i-1]; 

    const res = new Array(len).fill(0);
    res[0] = triangle[0][0];
    for(let i = 1; i < len; i++) {
        res[i] = res[i-1] + triangle[i][i];
        for(let j = i-1; j > 0; j--) {
            res[j] = Math.min(res[j-1],res[j]) + triangle[i][j];
        }
        res[0] += triangle[i][0]
    }
    return Math.min(...res);
};
// @lc code=end

