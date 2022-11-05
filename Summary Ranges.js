/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
    if (!nums.length) {
        return nums;
    }

    let range = [nums[0], nums[0]];
    let ranges = [];

    for (let num of nums.slice(1)) {
        if (num - range[1] == 1) {
            range[1] = num;
        } else {
            ranges.push(
                range[1] - range[0] == 0
                    ? `${range[0]}`
                    : `${range[0]}->${range[1]}`
            );
            range = [num, num];
        }
    }

    ranges.push(
        range[1] - range[0] == 0 ? `${range[0]}` : `${range[0]}->${range[1]}`
    );

    return ranges;
};
