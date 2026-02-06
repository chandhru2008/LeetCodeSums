/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);

    const diff = (sumB - sumA) / 2;

    const bobSet = new Set(bobSizes);

    for (let x of aliceSizes) {
        const y = x + diff;
        if (bobSet.has(y)) {
            return [x, y];
        }
    }
};