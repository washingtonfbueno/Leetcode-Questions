/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    let numsRecord = {};

    for (let [index, num] of nums.entries()) {
        if (numsRecord[num] == undefined) {
            numsRecord[num] = index;
        } else if (index - numsRecord[num] <= k) {
            return true;
        } else {
            numsRecord[num] = index;
        }
    }

    return false;
};
