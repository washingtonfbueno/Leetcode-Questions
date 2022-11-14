/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b);

    let results = [];
    let hash = new Set();

    for (let index = 0; index < nums.length - 2; index++) {
        let left = index + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[index] + nums[left] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                let arr = [nums[index], nums[left], nums[right]];
                let arrStr = arr.toString();
                if (!hash.has(arrStr)) {
                    results.push([nums[index], nums[left], nums[right]]);
                }

                hash.add(arrStr);

                left++;
                right--;
            }
        }
    }
    return results;
};
