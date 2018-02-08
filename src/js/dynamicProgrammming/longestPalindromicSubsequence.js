/*
 * Given a string find longest palindromic subsequence in this string.
 * A longest palindromic subsequence is a sequence that appears in the same relative order, but not necessarily contiguous(not substring)
 * and palindrome in nature( means the subsequence will read same from the front and back.
 * String A = " AABCDEBAZ";

 Longest Palindromic subsequence: ABCBA or ABDBA or ABEBA

 There are many subsequences can be found which are palindrome like, AA, BCB, ABA, BB etc
 but we need to find the one with the maximum length.
 Time Complexity will be O(2n).

 LPS[i, i]     =     1     Every single character is a palindrome by itself of length 1
 LPS[i, j]     =     2     if j=i+1, sequence has only 2 characters
 LPS[i, j]     =     2  +  LPS[i-1, j-1]     If first and last characters are same
 LPS[i, j]     =     MAX( LPS[i+1,j], LPS[i, j-1] )     If first and last characters are not same

         a   g   b   d   b   a
         0   1   2   3   4   5
          -------
         LPS[0,5] = 2 + LPS[1,4]

         a   g   b   d   b   a
         0   1   2   3   4   5
         -------
        LPS[0,5] = Max( LPS[0,4], LPS[1, 5] )

         a   g   b   d   b   a
         0   1   2   3   4   5
   a  0  1   1   1   1   3   5
   g  1      1   1   1   3   3
   b  2          1   1   3   3
   d  3              1   1   1
   b  4                  1   1
   a  5                      1

 */
let longestPalindromicSubsequence = ( str ) => {

    let n = str.length;

    let res = []
    for (let i=0; i<n; i++) {
        res.push(new Array(n).fill(0));
        res[i][i] = 1;
    }

    for (let l=2; l<=n; l++) {

        for ( let i=0; i< n - l + 1; i++) {

            let j = i + l - 1;

            if(l == 2 && str[i] == str[j]){

                res[i][j] = 2;
            }else if(str[i] == str[j]){
                res[i][j] = res[i + 1][j-1] + 2;
            }else{
                res[i][j] = Math.max(res[i + 1][j], res[i][j - 1]);
            }

        }
    }

    console.log(res)
    return res[0][res.length - 1];
}

let str = "agbdba";


console.log(longestPalindromicSubsequence(str));