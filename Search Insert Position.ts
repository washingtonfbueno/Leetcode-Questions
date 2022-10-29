function searchInsert(nums: number[], target: number) {
    let start = 0;
    let end = nums.length;

    while (end > start) {
        let center = Math.floor((start + end) / 2);
        console.log(start, end);
        if (target > nums[center]) {
            start = center + 1;
        } else if (target < nums[center]) {
            end = center - 1;
        } else {
            return center;
        }
    }

    return target > nums[start] ? start + 1 : start;
}

console.log(searchInsert([1, 3, 5, 6, 7, 11, 15, 21, 27, 29, 35, 36, 39], 38));
