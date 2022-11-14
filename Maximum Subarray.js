/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let curr = 0;
    let max = -Infinity;

    for (let num of nums) {
        if (curr < 0) {
            curr = num;
        } else {
            curr += num;
        }

        max = Math.max(curr, max);
    }

    return max;
};
