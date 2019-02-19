/**
 * Given a text and a pattern, determine if the pattern matches with text completely or not
 * using regular expression matching. For simplicity assume that the pattern may contain
 * only two operators i.e. '.' and '*'. Operator '*' in pattern means that
 * the character preceding '*' may not appear or may appear any number of times in text.
 * Operator '.' matches with any character in text exactly once.
 * @param text
 * @param pattern
 * @param i
 * @param j
 * @returns {boolean}
    Runtime Complexity
    Exponential.

    Memory Complexity
    Exponential.
 */


let regx_match = function(text, pattern) {
    let m = text.length;
    let n = pattern.length;
    return matchRec(text, pattern, 0, 0, m, n);
};

let matchRec = (s1, s2, i, j, m, n) => {
    if (i === m && j === n) {
        return true;
    }
    if (j < n - 1 && s2[j + 1] === '*') {
        for (let k = i; k <= m; k++) {
            if (matchRec(s1, s2, k, j + 2, m, n)) {
                return true;
            }
            if (k >= m) {
                return false;
            }
            if (s2[j] !== '.' && s1[k] !== s2[j]) {
                return false;
            }
        }
    } else if (i<m && j<n && (s2[j] === '.' || s1[i] === s2[j])) {
        return matchRec(s1, s2, i + 1, j + 1, m, n);
    }
    return false;
}

console.log(regx_match('fabbbc', '.ab*c'));  //true
console.log(regx_match('aaabbbbbcccd','a*bbb*c*d'));  //true
console.log(regx_match('a', 'ab*'));  //true
console.log(regx_match('aaabbbbbcccd', 'a*bbb*.*d'));  //true
console.log(regx_match('aaabbbbbcccde', 'a*bbb*.*d'));  //false


