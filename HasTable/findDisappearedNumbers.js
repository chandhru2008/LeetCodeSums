var findDisappearedNumbers = function (nums) {
    let result = [];
    let set = new Set(nums);

    for(let i = 1; i<=nums.length; i++) {
        if(!set.has(i)) result.push(i);
    }
    return result;
};

nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));