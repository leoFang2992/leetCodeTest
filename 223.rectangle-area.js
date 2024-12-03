/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
        let rx1 = Math.max(ax1,bx1);
        let rx2 = Math.min(ax2,bx2);
        let ry1 = Math.max(ay1,by1);
        let ry2 = Math.min(ay2,by2);
        let cover = 0;

        if(rx2 > rx1 && ry2 > ry1 ) {
            cover = (rx2-rx1)*(ry2-ry1);
        }
        return (ax2-ax1)*(ay2-ay1)+(bx2-bx1)*(by2-by1)-cover;
};
// @lc code=end

