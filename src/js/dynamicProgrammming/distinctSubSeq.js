/**
 Given a string S and a string T, count the number of distinct subsequences of S which equals T.

 A subsequence of a string is a new string which is formed from the original string by deleting some (can be none)
 of the characters without disturbing the relative positions of the remaining characters.
 (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

 Here is an example:
 S = "rabbbit", T = "rabbit"
 ra bbit
 rab bit
 rabb it
 Return 3.

      r a b b i t
    1 0 0 0 0 0 0
  r 1 1 0 0 0 0 0
  a 1 1 1 0 0 0 0
  b 1 1 1 1 0 0 0
  b 1 1 1 2 0 0 0
  b 1 1 1 3 3 0 0
  i 1 1 1 3 3 3 0
  t 1 1 1 3 3 3 3


 The idea is the following:

 we will build an array res where res[i+1][j+1] means that S[0..j] contains T[0..i] that many times as distinct subsequences.
 Therefore the result will be res[T.length()][S.length()].
 we can build this array rows-by-rows:
 the first row must be filled with 1. That’s because the empty string is a subsequence of any string but only 1 time.
 So res[0][j] = 1 for every j. So with this we not only make our lives easier, but we also return correct value if T is an empty string.
 the first column of every rows except the first must be 0. This is because an empty string cannot contain a non-empty string
 as a substring – the very first item of the array: res[0][0] = 1, because an empty string contains the empty string 1 time.
 So the matrix looks like this:

 S 0123....j
 T +----------+
 |1111111111|
 0 |0         |
 1 |0         |
 2 |0         |
 . |0         |
 . |0         |
 i |0         |
 From here we can easily fill the whole grid: for each (x, y), we check if S[x] == T[y] we add the previous item and
 the previous item in the previous row, otherwise we copy the previous item in the same row. The reason is simple:

 if the current character in S doesn’t equal to current character T, then we have the same number of
 distinct subsequences as we had without the new character.
 if the current character in S equal to the current character T, then the distinct number of subsequences:
 the number we had before plus the distinct number of subsequences we had with less longer T and less longer S.
 An example:
 S: [acdabefbc] and T: [ab]

 first we check with a:

 *  *
 S = [acdabefbc]
 res[1] = [0111222222]
 then we check with ab:

 *  * ]
 S = [acdabefbc]
 res[1] = [0111222222]
 res[2] = [0000022244]
 And the result is 4, as the distinct subsequences are:

 S = [a   b    ]
 S = [a      b ]
 S = [   ab    ]
 S = [   a   b ]
 Time O(m * n)
 Space O(m * n)

 */
let distinctSubSeq = ( s, t ) => {

    let sLen = s.length;
    let tLen = t.length;

    let res = [];
    for ( let i=0; i<=sLen; i++ ) {

        res.push( new Array( tLen + 1).fill(0));
        /*
         the first column of every rows except the first must be 0. This is because an empty string cannot contain a non-empty string
         as a substring – the very first item of the array: res[0][0] = 1, because an empty string contains the empty string 1 time.
         */
        res[i][0] = 1;
    }

    /*
     the first row must be filled with 1. That’s because the empty string is a subsequence of any string but only 1 time.
     So res[0][j] = 1 for every j.
     */
    for ( let i=1; i<= tLen; i++ ) {
        res[0][i] = 0;
    }

    for ( let i=1; i<= sLen; i++ ) {
        for ( let j=1; j<= tLen; j++ ) {
            if ( s[i-1] === t[j-1] ) {
                res[i][j] = res[i-1][j] + res[i-1][j-1];
            } else {
                res[i][j] = res[i-1][j];
            }
        }
    }

    console.log(res);
    return res[sLen][tLen];

}

//let len = distinctSubSeq("acdabefbc", "ab");
let len = distinctSubSeq("rabbbit", "rabbit");
console.log( len );