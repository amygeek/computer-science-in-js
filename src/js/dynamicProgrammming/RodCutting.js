
/****************************************
 Given a rod of length and prices at which different length of this rod can sell, how do you cut this rod to maximize profit
 len = 5
    1, 2, 3, 4  len
    2, 5, 7, 8  value

             0  1  2  3  4  5
      (2) 1  0  2  4  6  8 10
      (5) 2  0  2  5  7 10 12
      (7) 3  0  2  5  7 10 12
      (8) 4  0  2  5  7 10 12
 1, 2, 2
 *****************************************/

class RodCutting {

    // O(2n)
    profit(value, len) {

        if (len <= 0) {
            return 0;
        }
        
        // either we will cut it or don't cut it
        let max = -1;

        for(let i=0; i<len; i++) {
            max = Math.max( max, value[i] + profit(value, len - ( i + 1 )));
        }
        
        return max;
    }

    //quadratic O(n2)
    profitDP( value, len ) {
        let res = new Array( len + 1).fill(0);
        res[0] = 0;
    
        for (let i = 1; i <= len; i++) {
            let max = -1;
            for (let j = 0; j < i; j++) {
                max = Math.max(max, value[j] + res[i - j - 1]);
                res[i] = max;
            }
        }
        return res[len];
    }

}

let rodCutting = new RodCutting();

let value = [ 2, 5, 7, 8];
let len = 5;
console.log("Max profit for len is " + len + ": " + rodCutting.profitDP(value, len));