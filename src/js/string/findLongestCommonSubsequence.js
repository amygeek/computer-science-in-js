
/*
 Given two string sequences, write an algorithm to find the length of longest subsequence present in both of them.
 */
class LongestCommonSubsequence {

    /*
     Start comparing strings in reverse order one character at str1 time.

     Now we have 2 cases –

     Both characters are same
     add 1 to the result and remove the last character from both the strings and make recursive call to the modified strings.
     Both characters are different
     Remove the last character of String 1 and make str1 recursive call and remove the last character from String 2 and make str1 recursive and then return the max from returns of both recursive calls. see example below
     Example:

     Case 1:

     String str1: "ABCD", String str2: "AEBD"

     res("ABCD", "AEBD") = 1 + res("ABC", "AEB")

     Case 2:

     String str1: "ABCDE", String str2: "AEBDF"

     res("ABCDE", "AEBDF") = Max(res("ABCDE", "AEBD"), res("ABCD", "AEBDF"))
     Time complexity will O(2n) since we will solving sub problems repeatedly.
     */

    findRec( str1,  str2, m, n) {
        if (m == 0 || n == 0) {
            return 0;
        }
        // check if last characters are same
        if (str1.charAt(m - 1) == str2.charAt(n - 1)) {
            // Add 1 to the result and remove the last character from both
            // the strings and make recursive call to the modified strings.
            return 1 + this.findRec(str1, str2, m-1, n-1);
        } else {
            // Remove the last character of String 1 and make str1 recursive
            // call and remove the last character from String 2 and make str1
            // recursive and then return the max from returns of both recursive
            // calls
            return Math.max( this.findRec(str1, str2, m-1, n), this.findRec(str1, str2, m, n-1));
        }
    }

    findMemo( str1,  str2, m, n, res) {
        if (res[m][n]) {
            return res[m][n];
        }
        let total;
        if (m == 0 || n == 0) {
            total = 0;
        }
        // check if last characters are same
        if (str1.charAt(m - 1) == str2.charAt(n - 1)) {
            // Add 1 to the result and remove the last character from both
            // the strings and make recursive call to the modified strings.
            total = 1 + this.findRec(str1, str2, m-1, n-1);
        } else {
            // Remove the last character of String 1 and make str1 recursive
            // call and remove the last character from String 2 and make str1
            // recursive and then return the max from returns of both recursive
            // calls
            total = Math.max( this.findRec(str1, str2, m-1, n), this.findRec(str1, str2, m, n-1));
        }
        res[m][n] = total;
        return total;
    }
    
    /*
     DP: Bottom-Up and store the solution of the sub problems in str1 solution array and use it when ever needed
     Start from bottom right corner and track the path and mark the cell from which cell the value is coming
     and whenever you go diagonal ( means last character of both string has matched,
     so we reduce the length of both the strings by 1, so we moved diagonally), mark those cells, this is our answer.
    
    
           A   B   C   D   A
        0  0   0   0   0   0
     A  0  1   1   1   1   1
     C  0  1   1   2   2   2
     B  0  1   2   2   2   2
     D  0  1   2   2   3   3
     E  0  1   2   2   3   3
     A  0  1   2   2   3   4
    
    
     */
    find( str1, str2 ) {

        let m = str1.length;
        let n = str2.length;

        let res = [];       //for store the LCS len
        let solution = [];  //for printing
    
        // if str2 is null then res of str1, str2 =0
        for (let i = 0; i <= m; i++) {

            res.push( new Array( n + 1).fill(0) );
            solution.push( new Array( n + 1).fill(0) );

        }
    
        for (let i = 1; i <= m; i++) {
    
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] == str2[j - 1]) {
    
                    res[i][j] = res[i - 1][j - 1] + 1;
    
                    solution[i][j] = "diagonal";
    
                } else {
    
                    res[i][j] = Math.max(res[i - 1][j], res[i][j - 1]);
    
                    if (res[i][j] == res[i - 1][j]) {
                        solution[i][j] = "top";
                    } else {
                        solution[i][j] = "left";
                    }
    
                }
            }
        }
    
        // below code is to just prlet the result
        let x = solution[m][n];
        let answer = "";
        let i = m;
        let j = n;
        while (x != "0") {
            if (solution[i][j] == "diagonal") {
                answer = str1[i - 1] + answer;
                i--;
                j--;
            } else if (solution[i][j] == "left") {
                j--;
            } else if (solution[i][j] == "top") {
                i--;
            }
            x = solution[i][j];
        }
        console.log(answer);  // ACDA

        /*
         0 0 0 0 0 0
         0 1 1 1 1 1
         0 1 1 2 2 2
         0 1 2 2 2 2
         0 1 2 2 3 3
         0 1 2 2 3 3
         0 1 2 2 3 4
         */
        // for (let i = 0; i <= m; i++) {
        //    let str = " ";
        //    for (let j = 0; j <= n; j++) {
        //        str += " " + res[i][j];
        //    }
        //    console.log( str );
        // }
        // console.log(solution)
        return res[m][n];  //4
    }
    
    
}

let LCS = new LongestCommonSubsequence();
let str1 = "awes7some";
let str2 = "aw2essomeme";
let res = [];
for (let i=0; i<= str1.length; i++) {
    res.push(new Array(str2.length + 1).fill(0));
}
console.log("Longest Commone Sub Sequenc Len :" + LCS.find(str1, str2));
console.log("Longest Commone Sub Sequenc Len findRec :" + LCS.findRec(str1, str2, str1.length, str2.length));
console.log("Longest Commone Sub Sequenc Len findMemo :" + LCS.findMemo(str1, str2, str1.length, str2.length, res));