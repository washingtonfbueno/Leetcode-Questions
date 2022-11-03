/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let numsRecord = {};

    for (let num of nums) {
        numsRecord[num] = numsRecord[num] + 1 || 1;
    }

    for (let [num, count] of Object.entries(numsRecord)) {
        if (count == 1) {
            return num;
        }
    }
};

singleNumber([2, 3, 2]);
