var repeatedNTimes = function (nums) {
    let seen = new Set();
    for (let i of nums) {
        if (seen.has(i))
            return i;
        seen.add(i);
    }
    return -1;
};
console.log(repeatedNTimes([1,2,3,3]))