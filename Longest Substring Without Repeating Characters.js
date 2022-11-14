/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    const lettersSet = new Set();
    let [left, right, curr, max] = [0, 0, 0, 0];

    while (right < s.length) {
        if (!lettersSet.has(s[right])) {
            lettersSet.add(s[right]);
            curr++;
            max = Math.max(curr, max);
            right++;
        } else {
            lettersSet.delete(s[left]);
            curr--;
            left++;
        }
    }

    return max;
};
