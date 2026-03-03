/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let obj = {};
    let res = 0;
    for(let i = 0; i < fruits.length; i++){
        let count = 0;
        for(let j = 0; j < baskets.length; j++){
            if(baskets[j] >= fruits[i]){
                if(!obj[j]){
                    obj[j] = true;
                    break;
                }
            }
            count++;
        }
        if(count === baskets.length){
            res++;
        }
    }

    return res;
};