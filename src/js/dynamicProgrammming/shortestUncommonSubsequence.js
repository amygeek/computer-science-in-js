


let shortestSeq = (str1, str2) => {

    let max = Number.MAX_VALUE;

    let m = str1.length;
    let n = str2.length;
    // declaring 2D array of m + 1 rows and
    // n + 1 columns dynamically
    let res = [];
    for (let i=0; i<=m; i++) {
        res.push(new Array(n+1));
    }

    // str2 string is empty
    for (let i = 0; i <= m; i++)
    res[i][0] = 1;

    // str1 string is empty
    for (let i = 0; i <= n; i++)
    res[0][i] = max;

    for (let i = 1; i <= m; i++)
    {
        for (let j = 1; j <= n; j++)
        {
            let ch = str1[i-1];
            let k;
            for (k = j-1; k >= 0; k--) {
                if (str2[k] == ch) {
                    break;
                }

            }

            // char not present in str2
            if (k == -1) {
                res[i][j] = 1;
            } else {
                res[i][j] = Math.min(res[i-1][j], res[i-1][k] + 1);
            }

        }
    }

    if (res[m][n] >= max) {
        res[m][n] = -1;
    }


    return res[m][n];
}

let s1 = "babab".split("");
let s2 = "babba".split("");

let res = shortestSeq(s1, s2);

console.log(res);