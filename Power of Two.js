/**
 * @param {number} n
 * @return {boolean}
 */

// <= 10 ** -9 instead of == 0, because javascript have precision problems with high numbers on logarithm
const isPowerOfTwo = (n) => {
    return (Math.log(n) / Math.log(2)) % 1 <= 10 ** -9;
};
