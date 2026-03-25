var kthCharacter = function(k) {
    let shifts = 0;

    while (k > 1) {
        // If k is in the second half, it came from a shifted char
        if (k % 2 === 0) {
            shifts += 1;
            k = k / 2;
        } else {
            k = Math.floor((k + 1) / 2);
        }
    }

    // 'a'.charCodeAt(0) = 97
    return String.fromCharCode(97 + shifts);
};