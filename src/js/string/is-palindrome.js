
/**
 * Given a string find all substrings that are palindromes
    A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards as it reads forwards.
     Runtime Complexity
     Polynomial, O(n3).

     Memory Complexity
     Constant, O(1).
 */
let is_palindrome = function(input, i, j) {
    while (j > i) {
        if (input[i] != input[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

let find_all_palindrome_substrings = function(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = (i + 1); j < input.length; j++) {
            if (is_palindrome(input, i, j)) {
                console.log(input.substring(i, j + 1));
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
 * @param input
 * @param j
 * @param k
 * @returns {number}
 */
let find_palindromes_in_sub_string = function(input, j, k) {
    let count = 0;
    while (j >= 0 && k < input.length) {
        if (input[j] != input[k]) {
            break;
        }
        console.log(input.substring(j, k + 1));
        count++;
        j--;
        k++;
    }
    return count;
};

let find_all_palindrome_substrings2 = function(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        count += find_palindromes_in_sub_string(input, i - 1, i + 1);
        count += find_palindromes_in_sub_string(input, i, i + 1);
    }
    return count;
};