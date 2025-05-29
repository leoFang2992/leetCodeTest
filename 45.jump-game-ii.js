/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //greedy 
    let res = 0;
    let position = nums.length-1; //target

    while(position > 0) {
        for(let i = 0; i<position; i++ ){
            if( i + nums[i] >= position) {
                position = i;
                res ++;
                break;
            }
        }
        
    }
    return res;
};
// @lc code=end

