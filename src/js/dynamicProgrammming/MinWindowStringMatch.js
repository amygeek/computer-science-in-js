
// find smallest window containing all characters of a pattern.

class MinWindowStringMatch {

    // Function to find smallest window containing all characters of 'pattern'
    findSubString( str,  pattern) {
        
        let sLen = str.length;
        let pLen = pattern.length;
    
        // check if str's length is less than pattern's
        // length. If yes then no such window can exist
        if (sLen < pLen) {
            console.log("No such window exists");
            return "";
        }
        
        let pRes = new Array(256).fill(0);
        let sRes = new Array(256).fill(0);
        
        // store occurrence characters in pattern
        for (let i = 0; i < pLen; i++) {
            pRes[pattern.charCodeAt(i)]++;
        }
        

        let start = 0;
        let startIndex = -1;
        let minLen = Number.MAX_VALUE;

        // start traversing the string, count of characters
        let count = 0;

        for (let j = 0; j < sLen ; j++) {
            // count occurrence of characters of string
            sRes[str.charCodeAt(j)]++;

            // If string'str char matches with pattern'str char then increment count
            if (pRes[str.charCodeAt(j)] != 0 && sRes[str.charCodeAt(j)] <= pRes[str.charCodeAt(j)] ) {
                count++;
            }

            // if all the characters are matched
            if (count == pLen) {
                // Try to minimize the window i.e., check if
                // any character is occurring more no. of times
                // than its occurrence  in pattern, if yes
                // then remove it from starting and also remove
                // the useless characters.
                while ( sRes[str.charCodeAt(start)] > pRes[str.charCodeAt(start)]  || pRes[str.charCodeAt(start)] == 0) {
        
                    if (sRes[str.charCodeAt(start)] > pRes[str.charCodeAt(start)]) {
                        sRes[str.charCodeAt(start)]--;
                    }
        
                    start++;
                }
        
                // update window size
                let len = j - start + 1;
                if (minLen > len) {
                    minLen = len;
                    startIndex = start;
                }
            }
        }
        
        // If no window found
        if (startIndex == -1)
        {
            console.log("No such window exists");
            return "";
        }
        

        console.log(minLen); // 6

        // Return substring starting from startIndex and length minLen
        return str.substring(startIndex, startIndex + minLen);
    }
    
}

//let str = "ADOBECODEBANC";   //BANC
//let pattern =  "ABC";

let str = "this is a test string";   //len 6: t stri
let pattern = "tist";

let minWindowStringMatch = new MinWindowStringMatch();
console.log("Smallest window is : " + minWindowStringMatch.findSubString(str, pattern));