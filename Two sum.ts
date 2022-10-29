function twoSum(nums: number[], target: number): number[] {
    let numbers: { [key: number]: number } = {};

    for (let [index, number] of nums.entries()) {
        if (numbers[target - number] != undefined) {
            return [numbers[target - number], index];
        }
        numbers[number] = index;
    }
}
