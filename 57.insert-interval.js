/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    const len = intervals.length;
    let i = 0;

    while(i< len && newInterval[0] > intervals[i][1]) {
        res.push(intervals[i]);
        i++
    }
    while( i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]); 
        i++
    }
    res.push(newInterval);
    while( i < len ) {
        res.push(intervals[i])
        i++
    }
    return res;
};
// @lc code=end

