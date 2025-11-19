var isPalindrome = function(x) {
    const string = x.toString();
    let result = ""
    for(let i = string.length-1; 0 <= i; i--){
        result+=string[i];
    }
    console.log(result)
    return Number(result) == x;
};
console.log(isPalindrome(121))