/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let newNums = nums.filter((num) => num);

    for (let index = 0; index < nums.length; index++) {
        nums[index] = newNums[index] || 0;
    }

    return nums;
};
