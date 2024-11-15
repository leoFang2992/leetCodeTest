/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 1) {
        return true;
    }
    //hash table （循环链表）
    // const temp = new Set();
    // while(n!==1) {
    //     if (temp.has(n)) {
    //         return false;
    //     }
    //     temp.add(n);
    //     n = doFn(n);
    // }
    // return true;
    
    //快慢指针
    let f = n;
    let s = n;
    while(true) {
        f = doFn(f);
        f = doFn(f);
        s = doFn(s);
        if(f === 1||s === 1) {
            return true;
        }
        if(s === f) {
            return false;
        }
    }
    
};

function doFn(n) {
    return n.toString().split('').reduce( (c,v)=> c+v*v,0);
}

// @lc code=end

