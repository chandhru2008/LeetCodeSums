/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let obj = {};
    let res = 0;
    for(let c of s){
        if(!obj[c]){
            obj[c] = true
            res++;
        }
    }

    return res;
};