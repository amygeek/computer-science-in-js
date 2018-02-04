
/*
 Repeated subsequence of length 2 or more

 Given a string, find if there is any subsequence of length 2 or more that repeats itself such that the two subsequence
 don’t have same character at same position, i.e., any 0’th or 1st character in the two subsequences shouldn’t
 have the same index in the original string.

 Example.

 Input: ABCABD
 Output: Repeated Subsequence Exists (A B is repeated)

 Input: ABBB
 Output: Repeated Subsequence Exists (B B is repeated)

 Input: AAB
 Output: Repeated Subsequence Doesn't Exist (Note that
 A B cannot be considered as repeating because B is at
 same position in two subsequences).

 Input: AABBC
 Output: Repeated Subsequence Exists (A B is repeated)

 Input: ABCDACB
 Output: Repeated Subsequence Exists (A B is repeated)

 Input: ABCD
 Output: Repeated Subsequence Doesn't Exist
 */

class SubSequence {
    // A function to check if a string str is palindrome
    isPalindrome (str,  l, h) {
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
    findSubSeq ( str ) {
        // Find length of input string
        let n = str.length;

        // Create an array to store all characters and their
        // frequencies in str[]
        let map = new Map();

        // Traverse the input string and store frequencies
        // of all characters in map[] array.
        for (let i = 0; i < n; i++)
        {
            let c = map.get(str[i]);
            if ( c ) {
                map.set(str[i], c+1);
            } else {
                map.set(str[i], 1);
            }
            // If the character count is more than 3
            // we found a repetition
            if (map.get( str[i] ) > 3) {
                return true;
            }

        }

        // In-place remove non-repeating characters
        // from the string
        let k = 0;

        for (let i = 0; i < n; i++) {
            if (map.get(str[i]) <= 1) {

                str = this.removeAt(str, i);
            } else {
                k++;
            }

        }

        //console.log(str)

        // check if the resultant string is palindrome
        if (this.isPalindrome(str, 0, k-1))
        {
            // special case - if length is odd
            // return true if the middle characer is
            // same as previous one
            if (k & 1) {
                return str[k/2] == str[k/2 - 1];
            }

            // return false if string is a palindrome
            return false;
        }

        // return true if string is not a palindrome
        return true;
    }

   removeAt ( str, i ) {
        return str.substr(0, i) + str.substr( i + 1);
    }
}

let S = new SubSequence();
let str = "ABCABD";

console.log(S.findSubSeq(str)); //7