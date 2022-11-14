/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
    return (Math.log(n) / Math.log(3)) % 1 <= 10 ** -10;
};
