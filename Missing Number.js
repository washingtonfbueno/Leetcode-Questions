/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let numsSet = new Set(nums);

    for (let num = 0; num <= nums.length; num++) {
        if (!numsSet.has(num)) {
            return num;
        }
    }
};
