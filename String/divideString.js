/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let result = [];
    let temp = "";

    for (let i = 0; i < s.length; i++) {
        temp += s[i];
        if (temp.length === k) {
            result.push(temp);
            temp = "";
        }
    }

    // Handle the last chunk
    if (temp.length > 0) {
        temp += fill.repeat(k - temp.length);
        result.push(temp);
    }

    return result;
};