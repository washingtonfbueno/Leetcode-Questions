/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
    const numsRecord = {};
    let highest = nums.reduce((prev, curr) => {
        numsRecord[curr] = numsRecord[curr] + 1 || 1;
        if (numsRecord[curr] > numsRecord[prev]) {
            return curr;
        }
        return prev;
    }, nums[0]);

    return highest;
};
