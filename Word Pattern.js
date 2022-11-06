/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const wordPattern = (pattern, s) => {
    s = s.split(" ");
    let patterns = {};
    let words = new Set();

    if (s.length != pattern.length) {
        return false;
    }

    for (let index = 0; index < s.length; index++) {
        if (!patterns[pattern[index]] && !words.has(s[index])) {
            patterns[pattern[index]] = s[index];
            words.add(s[index]);
        } else if (s[index] != patterns[pattern[index]]) {
            return false;
        }
    }

    return true;
};
