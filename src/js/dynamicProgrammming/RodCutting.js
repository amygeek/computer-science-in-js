
//Given a rod of length and prices at which different length of this rod can sell, how do you cut this rod to maximize profit
class RodCutting {

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

    profitDP( value, len ) {
        let res = new Array( len + 1);;
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

let value = [ 2, 3, 7, 8, 9 ];
let len = 5;
console.log("Max profit for len is " + len + ": " + rodCutting.profitDP(value, len));