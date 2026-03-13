/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let result = 0;
    for(let c of s){
        if(c == 'R'){
            count++;
        }else if (c === 'L'){
            count--;
        }
        if(count == 0){
            result++;
        }
    }
    return result;
};