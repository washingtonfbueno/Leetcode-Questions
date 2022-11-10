/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify numss in-place instead.
 */
const nextPermutation = (nums) => {
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i < 0) {
        return nums.reverse();
    }

    let j = nums.length - 1;

    while (i >= 0 && nums[i] >= nums[j]) {
        j--;
    }

    const swap = (first, second) => {
        let temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    };

    swap(i, j);

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        swap(left, right);
        left++;
        right--;
    }

    return nums;
};
