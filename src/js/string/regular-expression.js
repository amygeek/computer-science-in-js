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
 */
let regx_match_rec2 = function(text, pattern, i, j) {
    if (text.length === i && pattern.length === j) {
        return true;
    }

    if (j < pattern.length - 1 && pattern[j + 1] === '*') {
        for (let k = i; i < text.length + 1; k++) {
            if (regx_match_rec2(text, pattern, k, j + 2)) {
                return true;
            }

            if (k >= text.length) {
                return false;
            }

            if (pattern[j] != '.' && text[k] != pattern[j]) {
                return false;
            }
        }
    } else if (i < text.length && j < pattern.length && (pattern[j] === '.' || pattern[j] === text[i])) {
        return regx_match_rec2(text, pattern, i + 1, j + 1);
    }

    return false;
};

let regx_match2 = function(text, pattern) {
    return regx_match_rec2(text, pattern, 0, 0);
};

console.log(regx_match2('fabbbc', '.ab*c'));  //true
console.log(regx_match2('fabbbc', '.b*c'));   //false