/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let sum = nums.reduce((a, c) => a + c, 0);
    if(sum > k){
        let r = sum%k;
        return r;
    }else if(sum < k){
        return sum;
    }else{
        return 0;
    }
};
console.log(minOperations([1, 2, 3], 5)); // 0
console.log(minOperations([5, 1, 2, 3, 4], 6));