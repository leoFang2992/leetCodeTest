/*
 * @lc app=leetcode id=372 lang=javascript
 *
 * [372] Super Pow
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    // 精度 large number   (a⋅b) % m=[(a % m)⋅(b % m)] % m
    const MOD = 1337;
    const pow = (num, n) => {
        let result = 1;
        for (let i = 0; i< n; i++) {
            result = result * num % MOD
        }
        return result;
    };
    return b.reduceRight((result, n) => {
        a %= MOD;
        const pNum = result * pow(a, n) % MOD;
        a = pow(a, 10); 
        return pNum ;
    }, 1);
};
// @lc code=end

