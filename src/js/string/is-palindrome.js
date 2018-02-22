
/**
 * Given a string find all substrings that are palindromes
    input String: aabbbaa
    Palindrome Substrings: aa bb bbb abbba aabbbaa bb aa

    A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards as it reads forwards.
     Runtime Complexity
     Polynomial, O(n3).

     Memory Complexity
     Constant, O(1).
 */
let is_palindrome = function(str, i, j) {
    while (j > i) {
        if (str[i] != str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

let findAllPalindromeSubStrI = function(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (is_palindrome(str, i, j)) {
                console.log(str.substring(i, j + 1));
                count++;
            }
        }
    }
    return count;
};

/**
     Runtime Complexity
     Polynomial, O(n2).

     Memory Complexity
     Constant, O(1).
 * @param str
 * @param j
 * @param k
 * @returns {number}
 */
let findAllPalindromeSubStrRec = function(str, j, k) {
    let count = 0;
    while (j >= 0 && k < str.length) {
        if (str[j] != str[k]) {
            break;
        }
        console.log(str.substring(j, k + 1));
        count++;
        j--;
        k++;
    }
    return count;
};

let findAllPalindromeSubStr = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += findAllPalindromeSubStrRec(str, i - 1, i + 1);
        count += findAllPalindromeSubStrRec(str, i, i + 1);
    }
    return count;
};

console.log(findAllPalindromeSubStr('aabbbaa'));