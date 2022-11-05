/**
 * @param {number} n
 * @return {boolean}
 */

const isUgly = (n) => {
    if (n <= 0) {
        return false;
    }

    for (let num of [2, 3, 5]) {
        while (n % num == 0) {
            n /= num;
        }
    }

    return n == 1;
};
