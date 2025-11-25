var addDigits = function (num) {
    if (num === 0) return 0
    while (num.toString().length !== 1) {
        num = String(num).split("").reduce((total, num) => total + Number(num), 0)
    }
    return num
};
console.log(addDigits(38))