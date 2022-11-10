/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
    let stack = [];
    let indexHashset = new Set();

    for (let index = 0; index < s.length; index++) {
        if (s[index] == ")" && !stack.length) {
            indexHashset.add(index);
        } else if (s[index] == "(") {
            stack.push(index);
            indexHashset.add(index);
        } else {
            indexHashset.delete(stack.pop());
        }
    }

    let [max, curr] = [0, 0];

    for (let index = 0; index < s.length; index++) {
        if (!indexHashset.has(index)) {
            curr++;
        } else {
            max = Math.max(curr, max);
            curr = 0;
        }
    }

    return Math.max(curr, max);
};
