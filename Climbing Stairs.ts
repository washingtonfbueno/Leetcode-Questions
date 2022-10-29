function climbStairs(n: number): number {
    let numbers: any = {};

    const helper = (num: number): number => {
        if (num > n) {
            return 0;
        } else if (numbers[num]) {
            return numbers[num];
        } else if (num == n) {
            return 1;
        }
        numbers[num] = helper(num + 1) + helper(num + 2);
        return numbers[num];
    };

    return helper(0);
}

console.log(climbStairs(5));
