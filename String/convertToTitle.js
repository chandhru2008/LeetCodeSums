/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let obj = {};
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabet.split('').forEach((l, i) => {
        obj[i] = l;
    });

    let num = columnNumber;
    let res = "";

    while (num > 0) {
        num = num - 1
        let rem = num % 26;
        res = obj[rem] + res;
        num = Math.floor(num / 26);
    }

    return res
};