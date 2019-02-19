// Returns the minimum number of cuts needed
// to partition a string such that every part
// is a palindrome
// Time Complexity: quadratic O(n2)


class PalindromePartitioning {

    getMinCut2 (str, n) {

        /* Create two arrays to build the solution
         in bottom up manner
         C[i] = Minimum number of cuts needed for
         palindrome partitioning of substring
         str[0..i]
         res[i][j] = true if substring str[i..j] is
         palindrome, else false
         Note that C[i] is 0 if res[0][i] is true */
        let C = new Array(n).fill(0);
        let res = [];  //hold true or false for each position in the string palindrome matrix

        for (let i=0; i<n; i++ ) {
            let temp =new Array(n).fill(true);
            res.push(temp);
        }

        /* L is substring length. Build the solution
         in bottom up manner by considering all substrings
         of length starting from 2 to n. */
        for(let l=2; l<=n; l++) {
            for(let i=0; i<n-l+1; i++) {
                let j = i + l - 1;
                // If L is 2, then we just need to
                // compare two characters. Else need to
                // check two corner characters and value
                // of res[i+1][j-1]
                if (l===2) {
                    res[i][j] = (str[i] === str[j]);
                } else {
                    res[i][j] = (str[i] === str[j] && res[i+1][j-1]);
                }

            }
        }

        for(let i = 0; i<n; i++) {
            if (res[0][i]) {
                C[i] = 0;
            } else {
                C[i]  = Number.MAX_VALUE;
                for (let j=0; j < i; j++) {

                    if (res[j+1][i] &&  C[i] > C[j] + 1) {
                        C[i] = C[j] + 1;
                    }
                }

            }
        }
        return C[n-1];
    }

    isPalindrome( str ) {
        let i = 0;
        let j = str.length - 1;
        while ( i < j ) {
            if ( str[i] !== str[j] ) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    getMinCut (str, map) {

        if ( str === "" || this.isPalindrome( str ) ) {
            return 0;
        } else {

            let cuts = Number.MAX_VALUE;

            for ( let i=1; i<str.length; i++) {

                let leftCut = 0;
                let rightCut = 0;

                let leftStr = str.substr(0, i);
                let rightStr = str.substr(i);

                if ( map.has(leftStr) ) {
                    leftCut = map.get( leftStr );
                } else {
                    leftCut = this.getMinCut( leftStr, map );
                    map.set(leftStr, leftCut);
                }
                if ( map.has(rightStr) ) {
                    rightCut = map.get(rightStr);
                } else {
                    rightCut = this.getMinCut(rightStr, map);
                    map.set(rightStr, rightCut);
                }
                cuts = Math.min( 1 + leftCut + rightCut, cuts);
            }
            return cuts;
        }
    }
}


let str = "ababbbabbababa";
//let str = "abab";

let p = new PalindromePartitioning();

console.log(p.getMinCut2(str, str.length));

console.log(p.getMinCut(str, new Map()));