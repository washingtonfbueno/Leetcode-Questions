/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let rem = 0;
    const isNegative = x < 0;

    if (isNegative) {
        x *= -1;
    }

    const max = Math.floor(Math.log10(x)) + 1;

    for (let div = 1; div <= max; div++) {
        rem = rem * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    rem = isNegative ? rem * -1 : rem;

    return rem < (-2) ** 31 || rem > 2 ** 31 - 1 ? 0 : rem;
};
