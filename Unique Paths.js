/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const factorials = [1, 1];

const calculateFactorials = () => {
    for (let n = 2; n <= 200; n++) {
        factorials.push(n * factorials.at(-1));
    }
};

const uniquePaths = (m, n) => {
    if (!factorials[2]) {
        calculateFactorials();
    }

    return factorials[m + n - 2] / (factorials[m - 1] * factorials[n - 1]);
};
