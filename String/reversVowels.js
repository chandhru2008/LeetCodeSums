/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let reversedVowel = "";
    for (let i = s.length - 1; 0 <= i; i--) {
        let lc = s[i].toLowerCase()
        if (lc == "a" || lc == "e" || lc == "i" || lc == "o" || lc == "u") {
            reversedVowel += s[i];
        }
    }
    let result = "";
    console.log(reversedVowel)
    let ci = 0;
    for (let i = 0; i < s.length; i++) {
        let lc = s[i].toLowerCase();
        if (lc == "a" || lc == "e" || lc == "i" || lc == "o" || lc == "u") {
            result+=reversedVowel[ci];
            ci++;
        }else{
            result+=s[i]
        }
    }

    return result;
};