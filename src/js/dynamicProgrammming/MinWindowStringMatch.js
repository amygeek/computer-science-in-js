
// find smallest window containing all characters of a pattern.

class MinWindowStringMatch {

    // Function to find smallest window containing all characters of 't'
    findSubString( s,  t) {
        
        let sLen = s.length;
        let tLen = t.length;
    
        // check if string's length is less than pattern's
        // length. If yes then no such window can exist
        if (sLen < tLen) {
            console.log("No such window exists");
            return "";
        }
        
        let hashStrT = new Array(256).fill(0);
        let hashStrS = new Array(256).fill(0);
        
        // store occurrence ofs characters of pattern
        for (let i = 0; i < tLen; i++) {
            hashStrT[t.charCodeAt(i)]++;
        }
        

        let start = 0, startIndex = -1, minLen = Number.MAX_VALUE;

        // start traversing the string
        let count = 0;  // count of characters

        for (let j = 0; j < sLen ; j++) {
            // count occurrence of characters of string
            hashStrS[s.charCodeAt(j)]++;
        
            // If string's char matches with pattern's char then increment count
            if (hashStrT[s.charCodeAt(j)] != 0 && hashStrS[s.charCodeAt(j)] <= hashStrT[s.charCodeAt(j)] ) {
                count++;
            }
        
        
            // if all the characters are matched
            if (count == tLen) {
                // Try to minimize the window i.e., check if
                // any character is occurring more no. of times
                // than its occurrence  in pattern, if yes
                // then remove it from starting and also remove
                // the useless characters.
                while ( hashStrS[s.charCodeAt(start)] > hashStrT[s.charCodeAt(start)]  || hashStrT[s.charCodeAt(start)] == 0) {
        
                    if (hashStrS[s.charCodeAt(start)] > hashStrT[s.charCodeAt(start)]) {
                        hashStrS[s.charCodeAt(start)]--;
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
        
        // Return substring starting from startIndex
        // and length minLen
        return s.substring(startIndex, startIndex + minLen);
    }
    
}

 let s = "this is a test string";
 let t = "tist";
//let s = "ADOBECODEBANC";   //BANC
//let t =  "ABC";

let minWindowStringMatch = new MinWindowStringMatch();
console.log("Smallest window is : " + minWindowStringMatch.findSubString(s, t));