function longestCommonPrefix(strs: string[]) {
    for (let index = 0; index < strs[0].length; index++) {
        for (let word of strs.slice(1)) {
            if (word.slice(0, index + 1) != strs[0].slice(0, index + 1)) {
                return strs[0].slice(0, index);
            }
        }
    }
    return strs[0];
}
