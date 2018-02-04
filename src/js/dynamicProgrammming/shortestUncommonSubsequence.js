let max = Number.MAX_VALUE;


let shortestSeq = (S, T) => {
  
    let m = S.length;
    let n = T.length;
    // declaring 2D array of m + 1 rows and
    // n + 1 columns dynamically
    let dp = [];
    for (let i=0; i<=m; i++) {
        dp.push(new Array(n+1));
    }

    // T string is empty
    for (let i = 0; i <= m; i++)
    dp[i][0] = 1;

    // S string is empty
    for (let i = 0; i <= n; i++)
    dp[0][i] = max;

    for (let i = 1; i <= m; i++)
    {
        for (let j = 1; j <= n; j++)
        {
            let ch = S[i-1];
            let k;
            for (k = j-1; k >= 0; k--)
                if (T[k] == ch)
                    break;

            // char not present in T
            if (k == -1)
                dp[i][j] = 1;
            else
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][k] + 1);
        }
    }

    let ans = dp[m][n];
    if (ans >= max)
        ans = -1;

    return ans;
}

let s1 = "babab".split("");
let s2 = "babba".split("");

let res = shortestSeq(s1, s2);

console.log(res);