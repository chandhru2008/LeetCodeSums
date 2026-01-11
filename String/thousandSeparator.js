/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
      return n.toLocaleString('de-DE');
};
console.log(thousandSeparator(1234567)); // "1.234.567"