
let  findLongestRepeatingSubSeq = ( str, n ) => {

    // Create and initialize DP table
    let res = [];
    for(let i=0; i<= n; i++ ) {
        let temp = [];
        for (let j=0; j <=n; j++) {
            temp.push(0);
        }
        res.push(temp);
    }

    // Fill res table (similar to LCS loops)
    for (let i=1; i<=n; i++)
    {
        for (let j=1; j<=n; j++)
        {
            // If characters match and indexes are not same
            if (str[i-1] == str[j-1] && i != j) {
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

console.log(findLongestRepeatingSubSeq(str, str.length));  //3