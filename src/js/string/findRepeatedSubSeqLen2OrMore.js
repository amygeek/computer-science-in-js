
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

 String XYBYAXBY has XB(XBXB), XY(XYXY), YY(YYY), YB(YBYB) and YBY(YBYBY) as repeated subsequences

 O(n) time and space
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

    isPalindrome2(str, l, h) {
        if ( l >= h) {
            return true;
        }
        return str[l] == str[h] && this.isPalindrome2(str, l+1, h-1);
    }

    replaceAt( str, i, c) {
        return str.substr(0, i) + c + str.substr( i + c.length);
    }

    // The main function that checks if repeated
    // subsequence exists in the string
    findSubSeq ( str ) {
        // Find length of input string
        let n = str.length;

        // Create an array to store all characters and their
        // frequencies in str[]
        let arr = new Array(256).fill(0);

        // Traverse the input string and store frequencies
        // of all characters in map[] array.
        for (let i = 0; i < n; i++) {

            arr[str[i].charCodeAt(0)]++;
            // If the character count is more than 3
            // we found a repetition
            if ( arr[str[i].charCodeAt(0)] >= 3) {
                return true;
            }

        }

        // In-place remove non-repeating characters
        // from the string
        let k = 0;
        for (let i = 0; i < n; i++) {
            if (arr[str[i].charCodeAt(0)] > 1) {
                str = this.replaceAt(str, k, str[i]);
                k++;
            }

        }
        str = str.substr(0, k);

        // If the remaining string is palindrome then it is not repeated, else there is a repetition
        //if (this.isPalindrome(str, 0, k-1))
        //{
        //    // special case - if length is odd
        //    // return true if the middle characer is
        //    // same as previous one
        //    if (k & 1) {
        //        let index = parseInt(k/2);
        //        return str[index] == str[index - 1];
        //    }
        //
        //    // return false if string is a palindrome
        //    return false;
        //}
        //
        //// return true if string is not a palindrome
        //return true;

        return !this.isPalindrome(str, 0, k-1);
    }
}

let S = new SubSequence();
let str = "ABCABD";

console.log(S.findSubSeq(str));