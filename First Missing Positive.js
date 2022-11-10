/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
    nums = new Set(nums);

    for (let num = 1; num <= nums.size + 1; num++) {
        if (!nums.has(num)) {
            return num;
        }
    }
};
