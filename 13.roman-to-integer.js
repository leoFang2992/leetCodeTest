/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbolValue = new Map();
    symbolValue.set("I",1);
    symbolValue.set("V",5);
    symbolValue.set("X",10);
    symbolValue.set("L",50);
    symbolValue.set("C",100);
    symbolValue.set("D",500);
    symbolValue.set("M",1000);

    let res = 0;
    for (let i=0;i<s.length;i++) {
        let temp = symbolValue.get(s[i]);
        if( i<s.length-1 && temp < symbolValue.get(s[i+1]) ) {
            res -= temp;
        }else{
            res += temp;
        }
    }
    return res;
};
// @lc code=end

