/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    while (num > 9) {
        num = num
            .toString()
            .split("")
            .reduce((prev, curr) => {
                return prev + Number(curr);
            }, 0);
    }

    return num;
};
