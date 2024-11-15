/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //bigInt not work
    // let temp1 = parseInt(a,2)
    // let temp2 = parseInt(b,2)
    // let res =  parseInt(temp1+ temp2).toString(2);
    // return res;



    let res = '';
    let len1 = a.length-1;
    let len2 = b.length-1;
    let temp = 0; //
    while(len1>=0 || len2>=0) {
        const x = len1>=0 ? a[len1]-'0' : 0;
        const y = len2>=0 ? b[len2]-'0' : 0;
        const sum = x + y + temp;
        res += sum % 2; 
        temp = Math.floor(sum/2)

        len1--;
        len2--;
    }
    if(temp){
        res += temp;
    }
    return res.split('').reverse().join('');

};
// @lc code=end

