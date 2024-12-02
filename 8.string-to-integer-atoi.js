/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = 0;
  const MAX = Math.pow(2,31)-1;
  const MIN = Math.pow(-2,31);
  let flag = 1;
  start = 0
  let newS = s.trim();
  if(newS.length === 0) {
    return 0
  }
  if (newS[0] === "-") {
    flag = -1;
    start += 1; 
  }else if(newS[0] === "+") {
    start += 1
  }
  while (start < newS.length && newS[start].charCodeAt(0)-48 <= 9 && newS[start].charCodeAt(0)-48 >= 0) {
    res =  res*10 + (newS[start].charCodeAt(0)-48);
    start ++
  }
  res = res * flag;
  if (res > MAX) {
    res = MAX;
  }else if(res < MIN) {
    res = MIN;
  }
  return res;
};
// @lc code=end

