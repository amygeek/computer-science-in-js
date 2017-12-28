let findLongestCommonSubString = (str1, str2, m, n) => {
    let result = [];
    for(let i=0; i<= m; i++ ) {
        let temp = [];
        for (let j=0; j <=n; j++) {
            temp.push(0);
        }
        result.push(temp);
    }
    let longestLen = 0;
    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            if (str1[i-1] == str2[j-1]) {
                result[i][j] = result[i-1][j-1] + 1;
                longestLen = Math.max(result[i][j], longestLen);
            } else {
                result[i][j] = 0;
            }
        }
    }
    return longestLen;
}

let str1 = "this is awesome";
let str2 = "awesome amy";

let len = findLongestCommonSubString(str1, str2, str1.length, str2.length);
console.log(len); //7