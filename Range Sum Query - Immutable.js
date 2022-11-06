class NumArray {
    constructor(nums) {
        this.nums = nums;
    }

    sumRange(left, right) {
        let sum = 0;

        for (let index = left; index <= right; index++) {
            sum += this.nums[index];
        }

        return sum;
    }
}
