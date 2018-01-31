/*
 Given a string, find length of the longest repeating subseequence such that the two subsequence don’t have same string character
 at same position, i.e., any i’th character in the two subsequences shouldn’t have the same index in the original string.
 Input: str = "abc"
 Output: 0
 There is no repeating subsequence

 Input: str = "aab"
 Output: 1
 The two subssequence are 'a'(first) and 'a'(second).
 Note that 'b' cannot be considered as part of subsequence
 as it would be at same index in both.

 Input: str = "aabb"
 Output: 2

 Input: str = "axxxy"
 Output: 2
 */
let  findLongestRepeatingSubSeq = ( str, n ) => {

    // Create and initialize DP table
    let res = [];

    for(let i=0; i<= n; i++ ) {

        res.push(new Array( n + 1).fill(0));
    }

    // Fill res table (similar to LCS loops)
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++)
        {
            // If characters match and indexes are not same
            if (str[i-1] == str[j-1] && i != j) {
                //console.log("i=" + ( i - 1) + " " + str[i-1]);
                res[i][j] =  res[i-1][j-1] + 1;
            } else {
                // If characters do not match
                res[i][j] = Math.max(res[i][j-1], res[i-1][j]);
            }

        }
    }

    return res[n][n];
}
let str = "aabebcdd";

console.log(findLongestRepeatingSubSeq(str, str.length));  //3 abd