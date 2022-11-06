/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    const romanCombinations = {
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    let number = 0;

    for (let [key, value] of Object.entries(romanCombinations)) {
        let stringMatch = s.match(new RegExp(key, "g"));

        if (stringMatch) {
            s = s.replace(new RegExp(key, "g"), "");
            number += value * stringMatch.length;
        }
    }
    return number;
};
