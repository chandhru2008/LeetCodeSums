function countMatches(items, ruleKey, ruleValue) {
    let index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    console.log(index)
    let count = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i][index] === ruleValue){
            count++;
        }
    }
    return count;
};