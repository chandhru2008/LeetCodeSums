/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};

    for(let num of nums){
        if(obj[num]){
            obj[num]++;
        }else{
            obj[num] = 1;
        }
    }

    for(let key in obj){
        if(obj[key] === 1){
            return Number(key);
        }
    }
};