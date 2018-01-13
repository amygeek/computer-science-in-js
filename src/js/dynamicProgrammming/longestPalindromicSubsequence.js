/*
 * Given a string find longest palindromic subsequence in this string.
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

    return res[0][res.length - 1];
}

let str = "agbdba";

console.log(longestPalindromicSubsequence(str));