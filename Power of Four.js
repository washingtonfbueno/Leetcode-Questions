/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
    return (Math.log(n) / Math.log(4)) % 1 <= 10 ** -10;
};
