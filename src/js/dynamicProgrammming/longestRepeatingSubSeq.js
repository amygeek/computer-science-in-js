let longestRepeatingSubSeq = (str) => {

    let n = str.length;

    let res = [];
    for(let i=0; i<=n; i++) {
        let temp = new Array(n + 1).fill(0);
        res.push(temp);
    }

    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            if (str[i-1] === str[j-1] && i !== j) {

                res[i][j] = res[i-1][j-1] + 1;
            } else {

                res[i][j] = Math.max(res[i][j-1], res[i-1][j]);
            }
        }
    }
    return res[n][n];
}

let str = "aabebcdd";  //3

console.log(longestRepeatingSubSeq(str));