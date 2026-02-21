/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let isLetter = false;
    let count = 0;
    for(let i = s.length-1; 0<=i; i--){
        if(s[i]!==" "){
            count++;
            isLetter = true;
        }
        if(count > 0 && isLetter && s[i] == " "){
            return count;
        }
    }

    return count;
};