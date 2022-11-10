/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    let number = parseInt(s.match(/^\s*[-+]?[0-9]+/));
    if (!number) {
        return 0;
    }

    return number >= 2 ** 31 - 1
        ? 2 ** 31 - 1
        : number <= (-2) ** 31
        ? (-2) ** 31
        : number;
};

console.log(myAtoi("-4193 with"));
