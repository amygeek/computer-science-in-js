
/****************************************
 Given a rod of length and prices at which different length of this rod can sell, how do you cut this rod to maximize profit
 Example:

 Length  1   2   3   4    5    6    7    8    9   10
 Price   1   5   8   9   10   17   17   20   24   30
 for rod of length: 4
 Ways to sell :
 •   selling length : 4  ( no cuts) , Price: 9
 •   selling length : 1,1,1,1  ( 3 cuts) , Price: 4
 •   selling length : 1,1,2  ( 2 cuts) , Price: 7
 •   selling length : 2,2  ( 1 cut) , Price: 10
 •   selling length : 3, 1  ( 1 cut) , Price: 9
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

let value = [ 1, 5, 8, 9, 10];
let len = 5;
console.log("Max profit for len is " + len + ": " + rodCutting.profitDP(value, len));  //11