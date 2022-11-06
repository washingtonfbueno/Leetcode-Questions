/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
    let stack = [];
    const matches = { "(": ")", "[": "]", "{": "}" };

    for (let char of s) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char);
        } else if (char != matches[stack[stack.length - 1]]) {
            return false;
        } else {
            stack.pop();
        }
    }

    return stack.length == 0;
};
