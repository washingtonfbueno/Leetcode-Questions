/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
    let result = [];

    const traverse = (i = 0, sum = 0, nums = []) => {
        if (sum == target) {
            result.push(nums);
            return;
        } else if (i == candidates.length || sum > target) {
            return;
        }

        traverse(i, sum + candidates[i], [...nums, candidates[i]]);
        traverse(i + 1, sum, nums);
    };

    traverse();

    return result;
};

const combinationSum2 = (candidates, target) => {
    let result = [];

    const traverse = (i = 0, sum = 0, nums = []) => {
        if (sum == target) {
            result.push([...nums]);
            return;
        } else if (i == candidates.length || sum > target) {
            return;
        }
        nums.push(candidates[i]);
        traverse(i, sum + candidates[i], nums);
        nums.pop();
        traverse(i + 1, sum, nums);
    };

    traverse();

    return result;
};
