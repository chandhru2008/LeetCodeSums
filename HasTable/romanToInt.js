/**
 * Convert Roman numeral to integer
 * @param {string} s - Roman numeral string
 * @returns {number} - Corresponding integer
 */
 var romanToInt  = function(s) {
  const romanMap = {
    'I': 1, 'V': 5, 'X': 10,
    'L': 50, 'C': 100,
    'D': 500, 'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    // If current is less than next, subtract
    if (next > current) {
      total += (next - current);
      i++; // Skip next character
    } else {
      total += current;
    }
  }

  return total;
}
