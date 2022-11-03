/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
    let title = "";

    while (columnNumber) {
        let rem = (columnNumber - 1) % 26;

        title = String.fromCharCode(65 + rem) + title;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return title;
};
