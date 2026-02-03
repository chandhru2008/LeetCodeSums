/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroElements = [];
    let zeroElements = [];

    for (let value of nums) {
        if (value !== 0) {
            nonZeroElements.push(value);
        } else {
            zeroElements.push(0);
        }
    }

    // append zeros at the end
    for (let zero of zeroElements) {
        nonZeroElements.push(zero);
    }

    // modify nums in-place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nonZeroElements[i];
    }
};