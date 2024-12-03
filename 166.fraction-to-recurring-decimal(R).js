/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    
    let res = ""
    if(numerator === 0) return "0";
    //正负
    if(Math.sign(numerator) !== Math.sign(denominator)){
        res += "-";
    }

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    res += Math.floor(num/den);

    let rem = num%den;
    if(!rem) return res; //no decimal
    res += "."
    let temp = new Map(); 
    while(rem !== 0) {
        //余数为0，小数计算完或者发现循环部分
        temp.set(rem,res.length);
        rem *= 10;
        res += Math.floor(rem/den);//记录小数
        rem %= den;
        //重复余数判定循环
        if(temp.has(rem)) {
            const idx = temp.get(rem);
            return res.slice(0,idx) + `(${res.slice(idx)})`;
        }

    }

    return res;


    // let res = (numerator/denominator).toString();
    // let decimalRes = res.split(".")[1];

    // if(!decimalRes){
    //     return res;
    // }else {
    //     let temp = new Set();
    //     for (let i =0; i< decimalRes.length; i++) {
    //         let subStr = decimalRes.slice(i);
    //         if(temp.has(subStr)) {
    //             return true;
    //         }
    //         temp.add(subStr)
    //     }
    //     return res;
    // }

};
// @lc code=end

