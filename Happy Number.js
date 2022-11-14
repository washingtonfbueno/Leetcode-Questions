/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let numsSet = new Set();

    while (n != 1) {
        numsSet.add(n);

        let [curr, sum] = [n, 0];

        while (curr) {
            sum += (curr % 10) ** 2;
            curr = Math.floor(curr / 10);
        }

        n = sum;

        if (numsSet.has(n)) {
            return false;
        }
    }

    return true;
};
