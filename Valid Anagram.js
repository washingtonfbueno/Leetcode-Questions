/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    let sLetters = {};
    let tLetters = {};
    let setLetters = new Set(s + t);

    for (let letter of s) {
        sLetters[letter] = sLetters[letter] + 1 || 1;
    }

    for (let letter of t) {
        tLetters[letter] = tLetters[letter] + 1 || 1;
    }

    for (let letter of setLetters) {
        if (sLetters[letter] != tLetters[letter]) {
            return false;
        }
    }

    return true;
};
