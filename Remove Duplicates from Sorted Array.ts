function removeDuplicates(nums: number[]): number {
    let curr: null | number = null;
    let position = -1;
    for (let index = 0; index < nums.length; index++) {
        if (curr != nums[index]) {
            curr = nums[index];
            position++;
            nums[position] = nums[index];
        }
    }

    return position + 1;
}
