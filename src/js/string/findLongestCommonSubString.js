let findLongestCommonSubString = (str1, str2, m, n) => {

    let res = [];

    for(let i=0; i<= m; i++ ) {

        res.push(new Array( n + 1).fill(0));
    }

    let max = 0;

    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {

            if (str1[i-1] == str2[j-1]) {

                res[i][j] = res[i-1][j-1] + 1;
                max = Math.max(res[i][j], max);

            } else {
                res[i][j] = 0;
            }
        }
    }
    return max;
}

let str1 = "this is awesome";
let str2 = "aweqsome amy";

let len = findLongestCommonSubString(str1, str2, str1.length, str2.length);
console.log(len); //7