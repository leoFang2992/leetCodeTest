/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0 || x == 1) {
        return x;
    }
    //二分法
    let l = 1;
    let r = x;
    while (l <= r) {
        let mid = l + ((r-l)>>1); //位运算 
        // let mid = l + Math.floor((r-l)/2); 
        if(mid*mid<=x) {
            let temp = mid+1;
            if(temp>x/temp) {
                return mid;
            }
            l = mid+1
        }else{
            r = mid-1
        }

    }
};
// @lc code=end

