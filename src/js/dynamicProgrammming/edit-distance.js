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
let minimum = function(a, b, c) {
    return Math.min(a, b, c);
};

let compute_levenshtein_distance1 = function(str1, str2) {
    //degenerate cases
    if (str1 === str2) {
        return 0;
    }

    if (str1.length === 0) {
        return str2.length;
    }

    if (str2.length === 0) {
        return str1.length;
    }

    // for all i and j, d[i,j] will hold the Levenshtein distance between
    // the first i characters of str1 and the first j characters of str2;
    // note that d has (m+1)*(n+1) values
    let d = [];
    for (let i = 0; i < str1.length + 1; i++) {
        d.push([]);
        for (let j = 0; j < str2.length + 1; j++) {
            d[i].push(0);
        }
    }
    // source prefixes can be transformed into empty string by
    // dropping all characters
    for (let i = 0; i < str1.length + 1; i++) {
        d[i][0] = i;
    }

    // target prefixes can be reached from empty source prefix
    // by inserting every character
    for (let j = 1; j < str2.length + 1; j++) {
        d[0][j] = j;
    }
    let cost = 0;
    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                cost = 0; // no operation required
            } else {
                cost = 1;
            }
            d[i][j] = minimum(d[i - 1][j] + 1, // a deletion
                d[i][j - 1] + 1, // an insertion
                d[i - 1][j - 1] + cost); // a substitution

        }
    }
    return d[str1.length][str2.length];
};

/**
 Runtime Complexity
 Quadratic, O(n2)

 Memory Complexity
 Linear, O(n)

 The iterative algorithm with two rows for strings s1 and s2 is as follows:
 if s1 is equal to s2, return 0
 Set m as length of s1
 Set n as length of s2
 if s1 is empty, return n
 if s2 is empty, return m

 create two arrays of integer distances d1[] and d2[] of length n+1
 initialize d1 (previous row of distances) from 0..n
 for each i from 0..m
    calculate d2 (current row of distances) from the previous row d1 as follows:
    d2[0] = i + 1
    for each j from 0..n
        if s1[i] is equal to s2[j], initialize cost to 0, otherwise initialize cost to 1
        d2[j+1] = minimum( d2[j] +1, d1[j+1] + 1, d1[j] + cost )
    copy d2 (current row) to d1 (previous row) for next iteration

 return d2[n]
 */
let compute_levenshtein_distance2 = function(str1, str2) {
    //degenerate cases
    if (str1 === str2) {
        return 0;
    }

    if (str1.length === 0) {
        return str2.length;
    }

    if (str2.length === 0) {
        return str1.length;
    }

    // create two work arrays of integer distances
    let d1 = [];
    let d2 = [];

    for (let i = 0; i < str2.length + 1; i++) {
        d1.push(0);
    }

    for (let i = 0; i < str2.length + 1; i++) {
        d2.push(0);
    }

    // initialize d1 (the previous row of distances);
    // this row is A[0][i]: edit distance for an empty str1
    // the distance is just the number of characters to delete from str2
    for (let i = 0; i < str2.length + 1; i++) {
        d1[i] = i;
    }

    for (let i = 0; i < str1.length; i++) {
        // calculate d2 (current row distances) from the previous row d1

        // first element of d2 is A[i+1][0]
        // edit distance is delete (i+1) chars from str1 to match empty str2
        d2[0] = i + 1;

        // use formula to fill in the rest of the row
        let cost = 0;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                cost = 0;
            } else {
                cost = 1;
            }

            d2[j + 1] = minimum(d2[j] + 1, d1[j + 1] + 1, d1[j] + cost);
        }
        // copy d2(current row) to d1(previous row) for next iteration
        for (let j = 0; j < str2.length + 1; j++) {
            d1[j] = d2[j];
        }
    }
    return d2[str2.length];
};

let  editDistDP = (str1, str2, m, n) => {
    // Create a table to store results of subproblems
    let dp = new Array(m+1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1);
    }

    // Fill d[][] in bottom up manner
    for (let i=0; i<=m; i++) {
        for (let j=0; j<=n; j++) {

            // If first string is empty, only option is to
            // insert all characters of second string
            if ( i == 0 ) {
                dp[i][j] = j;  // Min. operations = j

            // If second string is empty, only option is to
            // remove all characters of second string
            } else if (j==0) {
                dp[i][j] = i; // Min. operations = i

            // If last characters are same, ignore last char
            // and recur for remaining string
            } else if (str1[i-1] == str2[j-1]) {
                dp[i][j] = dp[i - 1][j - 1];

                // If last character are different, consider all
                // possibilities and find minimum
            } else {
                dp[i][j] = 1 + minimum(dp[i][j - 1],  // Insert
                        dp[i - 1][j],  // Remove
                        dp[i - 1][j - 1]); // Replace
            }
        }
    }

    return dp[m][n];
}

let str1 = "sunday";
let str2 = "monday";
console.log( editDistDP( str1 , str2 , str1.length, str2.length) );  //2