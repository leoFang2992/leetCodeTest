/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    //1.暴力
    let res = "";
    let r1 = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let r2 = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let r3 = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]; 
    let r4 = ["","M","MM","MMM"];

    res =  r4[Math.floor(num/1000)] + r3[Math.floor((num%1000)/100)] + r2[Math.floor((num%100)/10)] + r1[num%10];
    return res;

};
// @lc code=end

