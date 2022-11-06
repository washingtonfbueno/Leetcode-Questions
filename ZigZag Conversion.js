/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    let rows = [];
    let [row, index, reverse] = [0, 0, false];

    while (index < s.length) {
        rows[row] = rows[row] ? rows[row] + s[index] : s[index];

        if (!reverse) {
            row++;
        } else {
            row--;
        }

        index++;

        if (row == numRows - 1) {
            reverse = true;
        } else if (row == 0) {
            reverse = false;
        }
    }
    return rows.join("");
};
