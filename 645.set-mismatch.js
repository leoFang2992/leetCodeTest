/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    //mark 位运算 [x,y] x:repeat element value; y:repeat element index
    let temp = nums.length;// x^y
    for(let i = 0;i<nums.length;i++) {
        temp = temp^i^nums[i];
    }
    const lowbit = temp & (-temp);//最低不同位
    let num1 = 0, num2 = 0
    for(const num of nums) {
        if((num&lowbit) === 0){
            num1 ^= num;
        }else {
            num2 ^= num;
        }
    }
    for (let i = 1;i<=nums.length;i++) {
        if((i&lowbit) === 0){
            num1 ^= i;
        }else {
            num2 ^= i;
        }
    }
    //区分num1 num2
    for (const num of nums) {
        if (num === num1) {
            return [num1, num2];
        }
    }
    return [num2, num1];
};
// @lc code=end

