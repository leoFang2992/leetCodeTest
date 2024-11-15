/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //临界情况判断
    if(x<0 || (x%10 == 0 && x!=0) ) {
        return false;
    }else {
         //basic mind: number to String array , reverse array and covert to number
        // let res = x.toString().split('').reverse().join('');
        // if (res == x) {
        //     return true;
        // }else{
        //     return false;
        // }

        // 双指针 left right
        // let temp = x.toString();
        // let left = 0;
        // let right = temp.length-1
        // while(left < right) {
        //     if( temp[left] != temp[right] ) {
        //         return false;
        //     }else{
        //         left++;
        //         right--;
        //     }
        // } 
        // return true;

        //比较一半数字
        let res = 0;
        while(x > res) {
            res = res*10+x%10;
            x = Math.floor(x / 10); 
        }
        return x == res || x === Math.floor(res / 10);
    }


};
// @lc code=end

