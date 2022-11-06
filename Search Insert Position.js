/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length;

    while (end > start) {
        let center = Math.floor((start + end) / 2);

        if (target > nums[center]) {
            start = center + 1;
        } else if (target < nums[center]) {
            end = center - 1;
        } else {
            return center;
        }
    }

    return target > nums[start] ? start + 1 : start;
};
