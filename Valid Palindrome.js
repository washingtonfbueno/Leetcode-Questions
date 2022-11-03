/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    s = s.toLowerCase().match(/[a-zA-Z]/g);

    if (!s) {
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    while (right > left) {
        if (s[right] != s[left]) {
            return false;
        }

        right--;
        left++;
    }

    return true;
};
