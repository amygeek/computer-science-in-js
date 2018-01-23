
class SmallSquare {

    //solve using recursion
    solveRecursively( n, options) {
        if (n <= 0) {
            return 0;
        }
        
        let min = solveRecursively(n - 1 * 1, options);
        for (let i = 2; i <= options; i++) {
            if (n >= i * i) {
                min = Math.min(min, solveRecursively(n - i * i, options));
            }
        }
        return min + 1;
    }
    
    solve( n ) {
        
        let options = parseInt( Math.sqrt( n ) );
    
        //solve using recursion
        //console.log(solveRecursively(n, options));
    
        //solve using Dynamic programming
        console.log( this.solveUsingDP(n, options));
    }
    
    solveUsingDP( n, options) {
        
        let res = new Array( n + 1); // Minimum numbers required whose sum is = n
        
        res[0] = 0; // if number is 0 the answer is 0.
        
        let nums = new Array( options + 1 );

        // solve in bottom up manner
        for (let number = 1; number <= n; number++) {

            // reset the nums[] for new i
            for (let j = 0; j <= options; j++) {
                nums[j] = 0;
            }
            // now try every option one by one and fill the solution in nums[]
            for (let j = 1; j <= options; j++) {
                // check the criteria
                if (j * j <= number) {
                    // select the number, add 1 to the solution of number-j*j
                    nums[j] = res[number - j * j] + 1;
                }
            }
    
            //Now choose the optimal solution from nums[]
            res[number] = -1;
            for(let j=1;j<nums.length;j++){
                if( nums[j] > 0 && (res[number] == -1 || res[number] > nums[j] )){
                    res[number] = nums[j];
                }
            }
        }
        return res[n];
    }
    
}

let N = 12;
let smallSquare = new SmallSquare();
smallSquare.solve(N);