/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let nums = new Set();

    while (n != 1) {
        nums.add(n);
        let arr = n.toString().split("");

        n = arr.reduce((prev, curr) => {
            return prev + Number(curr) ** 2;
        }, 0);

        if (nums.has(n)) {
            return false;
        }
    }

    return true;
};
