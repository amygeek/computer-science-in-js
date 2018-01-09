

// A function to check if a string str is palindrome
let isPalindrome = (str,  l, h) => {
    // l and h are leftmost and rightmost corners of str
    // Keep comparing characters while they are same
    while (h > l) {
        if (str[l++] != str[h--]) {
            return false;
        }
    }
    return true;
}

// The main function that checks if repeated
// subsequence exists in the string
let repeatedSubSequence = ( str ) => {
    // Find length of input string
    let n = str.length;

    // Create an array to store all characters and their
    // frequencies in str[]
    let freq = new Map();

    // Traverse the input string and store frequencies
    // of all characters in freq[] array.
    for (let i = 0; i < n; i++)
    {
        let c = freq.get(str[i]);
        if ( c ) {
            freq.set(str[i], c+1);
        } else {
            freq.set(str[i], 1);
        }


        // If the character count is more than 3
        // we found a repetition
        if (freq.get([str[i]]) > 3) {
            return true;
        }

    }

    // In-place remove non-repeating characters
    // from the string
    let k = 0;
    let temp =[];
    for (let i = 0; i < n; i++) {
        if (freq.get(str[i]) > 1) {
            str[k++] = str[i];
        }
    }

    console.log(str)
    // check if the resultant string is palindrome
    if (isPalindrome(str, 0, k-1))
    {
        // special case - if length is odd
        // return true if the middle characer is
        // same as previous one
        if (k & 1)
            return str[k/2] == str[k/2 - 1];

        // return false if string is a palindrome
        return false;
    }

    // return true if string is not a palindrome
    return true;
}


let str = "AABBC";


console.log(repeatedSubSequence(str)); //7