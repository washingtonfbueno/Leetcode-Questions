/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let reversed = "";
    for (let num of x.toString()) {
        reversed = num + reversed;
    }
    reversed = reversed.replace("-", "");
    reversed = x < 0 ? -reversed : +reversed;
    return reversed <= 2 ** 31 && reversed >= (-2) ** 31 - 1 ? reversed : 0;
};
