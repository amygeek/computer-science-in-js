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
let checkMatch = function(text, pattern, i, j) {

    if (text.length === i && pattern.length === j) {
        return true;
    }

    if (j < pattern.length - 1 && pattern[j + 1] === '*') {

        for (let k = i; k < text.length; k++) {
            
            if ( checkMatch (text, pattern, k, j + 2)) {
                return true;
            }

            if (k > text.length) {
                return false;
            }

            if (pattern[j] != '.' && text[k] != pattern[j]) {
                return false;
            }
        }
    } else if (i < text.length && j < pattern.length && (pattern[j] === '.' || pattern[j] === text[i])) {
        return checkMatch(text, pattern, i + 1, j + 1);
    }

    return false;
};


console.log(checkMatch('fabbbc', '.ab*c', 0, 0));  //true
console.log(checkMatch('fabbbc', '.b*c', 0, 0));   //false

let match = ( text, pattern ) => {
    
    let sLen = text.length;

    let j=0;
    let i = 0;
    let isMatched = false;
    
    while ( i < sLen - 1 ) {
        if ( text[i] === pattern[j] || pattern[j] === ".") {
            j++;
            i++;
            isMatched = true;
        } else if ( pattern[j] === "*" && text[i-1] === text[i] && text[i-1] === pattern[j-1]) {
            i++;
            isMatched = true;
        } else {

            isMatched = false;
            break;
        }
    }
    return isMatched;
}

console.log(match('fabbbc', '.ab*c'));  //true
console.log(match('fabbbc', 'f.blbbc'));   //false