/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    let firstToSecond = {};
    let secondStringSet = new Set();

    for (let index = 0; index < s.length; index++) {
        if (!firstToSecond[s[index]] && !secondStringSet.has(t[index])) {
            firstToSecond[s[index]] = t[index];
            secondStringSet.add(t[index]);
        }
    }

    s = s.split("").reduce((prev, curr) => {
        return prev + firstToSecond[curr] || curr;
    }, "");

    return s == t;
};
