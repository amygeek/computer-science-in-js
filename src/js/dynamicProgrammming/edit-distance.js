/**
 Levenshtein distance 'LD' is  a measure of the difference between two strings s1 and s2.
 It is the minimum number of deletions, insertions, or substitutions required to transform s1 into s2.
 It is also known as edit distance.

 Given two strings, compute the Levenshtein distance between them i.e.
 the minimum number of edits required to convert one string into the other.

 For example, the Levenshtein distance between "kitten" and "sitting" is 3.

 The minimum steps required to transform the former into latter are:
 kitten → sitten (substitution of "s" for "k")
 sitten → sittin (substitution of "i" for "e")
 sittin → sitting (insertion of "g" at the end)

 Runtime Complexity
 Quadratic, O(n2)

 Memory Complexity
 Quadratic, O(n2)

 if s1 is equal to s2, return 0

 Set m as length of s1
 Set n as length of s2
 if s1 is empty, return n
 if s2 is empty, return m

 Create a two dimensional array with m+1 rows and n+1 columns
 Initialize the first row to 0..n
 Inaitialize the first column to 0..m

 for each character of s1 (i from 1..m)
    for each character of s2 (j from 1..n)
        if s1[i] = s2[j], initialize 'cost' to 0, otherwise initialize 'cost' to 1
        set d[i][j] = minimum (d[i-1][j] + 1, [the cell immediately above plus 1]
            d[i][j-1] + 1, [the cell immediately to the left plus 1]
            d[i-1][j-1] + cost [the cell diagonally above and to the left plus cost])

 return d[m][n]
 */


let  editDistDP = (str1, str2, m, n) => {
    // Create a table to store results of subproblems
    let res = [];
    for (let i = 0; i <= m; i++) {
        res[i] = new Array( n + 1);
    }

    // Fill d[][] in bottom up manner
    for (let i=0; i<=m; i++) {
        for (let j=0; j<=n; j++) {

            // If first string is empty, only option is to
            // insert all characters of second string
            if ( i == 0 ) {
                res[i][j] = j;  // Min. operations = j

            // If second string is empty, only option is to
            // remove all characters of second string
            } else if (j==0) {
                res[i][j] = i; // Min. operations = i

            // If last characters are same, ignore last char
            // and recur for remaining string
            } else if (str1[i-1] == str2[j-1]) {
                res[i][j] = res[i - 1][j - 1];

                // If last character are different, consider all
                // possibilities and find minimum
            } else {
                res[i][j] = 1 + Math.min(res[i][j - 1],  // Insert
                        res[i - 1][j],  // Remove
                        res[i - 1][j - 1]); // Replace
            }
        }
    }

    return res[m][n];
}

let str1 = "kitten";
let str2 = "sitting";
console.log( editDistDP( str1 , str2 , str1.length, str2.length) );  //2
