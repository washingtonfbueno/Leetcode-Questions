/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = (n) => {
    let numbers = {};

    const helper = (num = 0) => {
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

    return helper();
};
