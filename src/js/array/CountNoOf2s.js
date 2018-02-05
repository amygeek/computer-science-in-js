class CountNoOf2s {
    
    count2sBrute( n ) {
        let count = 0;
        
        while( n > 0 ) {
            if ( n % 10 === 2 ) {

                count++
            }
            n = parseInt( n / 10 );
        }
        return count;
    }
    
    count2sInRangeBrute( n ) {
        let count = 0;
        for (let i=0; i<=n; i++ ) {
            count += this.count2sBrute( i );
        }
        return count;
    }

    //319
    count2s ( n, d) {
        let power10 = Math.pow(10, d);
        let nexPower10 = power10 * 10;
        let right = n % power10;

        let roundDown = n - n % nexPower10;
        let roundUp = roundDown + nexPower10;
        let digit = n / power10 % 10;

        if ( digit < 2) {
            return roundDown / 10;
        } else if ( digit == 2 ) {
            return roundDown / 10 + right + 1;
        } else {
            //When the 2nd digit is greater than 2, we have 200-299, …, 12200-12299. Thus we have (num/1000+1)*100
            return roundUp / 10;
        }
    }

    count2sInRange( n ) {

        n = n + " "; //convert number to string

        let count = 0;
        for (let i=0; i< n.length; i++) {
            count += this.count2s ( n - 0,  i);  // n - 0 convert back string to number
        }
        return count;
    }

    /*
     When the 2nd digit is 0, like 12013. We want to know how many numbers between 0 and 12013 have 2 for the 2nd digit.
     We start from the smallest number: 200-299, 1200-1299, 2200-2299, …, 11200-11299, that is, we keep 200-299 in the first three digits
     and add 0 to 11 in the higher digits. When the 2nd digit is 0, We have 12 * 100=1200 numbers which have 2 for the 2nd digit.
     Actually it is (num/1000)*100.

     When the 2nd digit is 1, it is the same as analysis above. We can only get to 11200-11299.

     When the 2nd digit is 2,  we still have 200-299, …, 11200-11299, but we also have 12200-12213, which are 14 numbers in total.
     Thus when the second digit is 2, we have (num/1000)*100+(num%100)+1.

     When the 2nd digit is greater than 2, we have 200-299, …, 12200-12299. Thus we have (num/1000+1)*100
     */
    Counts(n){

        let count = 0;
        let factor = 1;
        let low = 0, cur = 0, high = 0;
    
        while( parseInt( n / factor) != 0){

            low = n % factor;
            cur = parseInt( n / factor) % 10;
            high = parseInt( n / ( factor * 10 ));
        
            if( cur < 2) {
                count += high * factor;
            } else if (cur==2) {
                count += high * factor + low + 1;
            } else {
                count += (high + 1) * factor;
            }
            
            factor *= 10;
        }
            
        return count;
    }
}

let countNoOf2s = new CountNoOf2s();
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
console.log ( countNoOf2s.count2sInRangeBrute(319));
console.log ( countNoOf2s.count2sInRange(319));
console.log ( countNoOf2s.Counts(319));