/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {};
    for(let c of s){
        if(obj[c]){
            obj[c]++;
        }else{
            obj[c] = 1;
        }
    }

    console.log(obj)
    for(let c of t){
        if(obj[c]){
            obj[c]--;
        }else{
            return false;
        }
    }

    console.log(obj)

    for(let key in obj){
        if(obj[key] != 0){
            return false;
        }
    }

    return true;
};