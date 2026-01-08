/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];

    let commonPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let currentPrefix = "";

        for (let j = 0; j < commonPrefix.length; j++) {
            if (strs[i][j] === commonPrefix[j]) {
                currentPrefix += commonPrefix[j];
            } else {
                break;
            }
        }

        commonPrefix = currentPrefix;

        if (commonPrefix.length === 0) {
            return "";
        }
    }

    return commonPrefix;
};

console.log(["dog","racecar","car"])
