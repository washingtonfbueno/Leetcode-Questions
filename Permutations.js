/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    let permutations = [];

    const getPermutations = (nums, num = []) => {
        if (!nums.length) {
            permutations.push(num);
            return;
        }
        for (let index = 0; index < nums.length; index++) {
            getPermutations(
                nums.slice(0, index).concat(nums.slice(index + 1)),
                [...num, nums[index]]
            );
        }
    };

    getPermutations(nums);

    return permutations;
};

console.log(permute([1, 2, 3]));
