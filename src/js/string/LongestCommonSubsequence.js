
/*
 Given two string sequences, write an algorithm to find the length of longest subsequence present in both of them.
 */
class LongestCommonSubsequence {

    /*
     Start comparing strings in reverse order one character at a time.

     Now we have 2 cases –

     Both characters are same
     add 1 to the result and remove the last character from both the strings and make recursive call to the modified strings.
     Both characters are different
     Remove the last character of String 1 and make a recursive call and remove the last character from String 2 and make a recursive and then return the max from returns of both recursive calls. see example below
     Example:

     Case 1:

     String a: "ABCD", String b: "AEBD"

     res("ABCD", "AEBD") = 1 + res("ABC", "AEB")

     Case 2:

     String a: "ABCDE", String b: "AEBDF"

     res("ABCDE", "AEBDF") = Max(res("ABCDE", "AEBD"), res("ABCD", "AEBDF"))
     Time complexity will O(2n) since we will solving sub problems repeatedly.
     */

    findRec( a,  b) {
        if (aLen == 0 || bLen == 0) {
            return 0;
        }
        let lenA = a.length;
        let lenB = b.length;
        // check if last characters are same
        if (a.charAt(lenA - 1) == b.charAt(lenB - 1)) {
            // Add 1 to the result and remove the last character from both
            // the strings and make recursive call to the modified strings.
            return 1 + this.findRec(a.substr(0, lenA - 1), b.substr(0, lenB - 1));
        } else {
            // Remove the last character of String 1 and make a recursive
            // call and remove the last character from String 2 and make a
            // recursive and then return the max from returns of both recursive
            // calls
            return Math.max( this.findRec(a.substr(0, lenA - 1), b.substr(0, lenB)), this.findRec(a.substr(0, lenA), b.substr(0, lenB - 1)));
        }
    }
    
    /*
     DP: Bottom-Up and store the solution of the sub problems in a solution array and use it when ever needed
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
    find( a, b ) {

        let aLen = a.length;
        let bLen = b.length;

        let res = [];       //for store the LCS len
        let solution = [];  //for printing
    
        // if b is null then res of a, b =0
        for (let i = 0; i <= aLen; i++) {

            res.push(new Array( bLen + 1));
            solution.push(new Array( bLen + 1));

            res[i][0] = 0;
            res[0][i] = 0;
            solution[i][0] = "0";
            solution[0][i] = "0";
        }
    
        for (let i = 1; i <= aLen; i++) {
    
            for (let j = 1; j <= bLen; j++) {
                if (a[i - 1] == b[j - 1]) {
    
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
        let x = solution[aLen][bLen];
        let answer = "";
        let i = aLen;
        let j = bLen;
        while (x != "0") {
            if (solution[i][j] == "diagonal") {
                answer = a[i - 1] + answer;
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
        //for (let i = 0; i <= aLen; i++) {
        //    let str = " ";
        //    for (let j = 0; j <= bLen; j++) {
        //        str += " " + res[i][j];
        //    }
        //    console.log( str );
        //}
        //console.log(solution)
        return res[aLen][bLen];  //4
    }
    
    
}

let LCS = new LongestCommonSubsequence();
let a = "ACBDEA";
let b = "ABCDA";
console.log("Longest Commone Sub Sequence Len :" + LCS.find(a, b));