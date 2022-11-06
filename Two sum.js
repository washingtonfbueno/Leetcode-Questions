/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    let numbers = {};

    for (let [index, number] of nums.entries()) {
        if (numbers[target - number] != undefined) {
            return [numbers[target - number], index];
        }
        numbers[number] = index;
    }
};
