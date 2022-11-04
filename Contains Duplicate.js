/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let numbers = new Set();

    for (num of nums) {
        if (!numbers.has(num)) {
            numbers.add(num);
        } else {
            return true;
        }
    }

    return false;
};
