/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 2 point?  [2,n] 找质数
    res = 0;
    if(n === 0 || n === 1) return res;
    
    //sieve of Eratosthenes  n < 10; 2 3 5 7, 2 3 5 7 倍数也消除。
    let seen = new Uint8Array(n) //compare with array ,faster;
    for(let i = 2; i< n; i++) {
        if(seen[i]) continue; //skip this loop and continue next loop. break jump out of loop.
        res++;
        // remove multi i;  
        for(let j = i*i; j < n; j+=i) {
            seen[j] = 1
        }
    }

    // loop 超时
    // for(let i = 2; i < n; i++) {
    //     let flag = true;
    //     for(let j = 2; j<= Math.sqrt(i); j++){
    //         if( i%j === 0) {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if(flag) {
    //         res +=1
    //     }
    // }
    return res;
};
// @lc code=end

