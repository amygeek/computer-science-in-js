
/*
 Given a amount ‘A’ and n coins,   v1<v2<v3<………..<vn . Write a program to find out minimum numbers of coins
 required to make the change for the amount ‘A’.

 Example:

 Amount: 5
 Coins [] = 1, 2, 3.

 No of ways to make the change are : { 1,1,1,1,1} , {1,1,1,2}, {2,2,1},{1,1,3} and {3,2}.
 So as we can see minimum number of coins required are 2 ( 3+2=5}.

 We will maintain an array to store the optimal solutions for the smaller problems, say we call it as res[]. length of this array will be amount+1. (starts with 0).
 So res[n] will be our final answer, minimum no of coins required to make change for amount ‘n‘.
 Since we are using Bottom-up approach, so will start filling the res[] from 0 to n. we will start solving it from the smaller possible amount which is 0 here.
 We need 0 coins to make change for amount 0, so res[0]=0.
 We will use another array CC[] (size = number of coins )will store the solution for amount n with using all the coins, minimum of all these will the optimal solution for the amount.
 Since we are finding the solution for all the amounts 0 to N, we have to reset CC[] every time ( for amount = 1 to N)
 */
class coinChangeMin {

    /**
     * Top down dynamic programing. Using map to store intermediate results.
     * Returns Integer.MAX_VALUE if amount cannot be formed with given coins
     */
    minimumCoinTopDown(amount, coins, map) {

        //if amount is 0 then there is nothing to do. return 0.
        if ( amount == 0 ) {
            return 0;
        }
        
        //if map contains the result means we calculated it before. Lets return that value.
        if ( map.has(amount) ) {
            return map.get(amount);
        }
        
        //iterate through all coins and see which one gives best result.
        let min = Number.MAX_VALUE;

        for ( let i=0; i < coins.length; i++ ) {

            //if value of coin is greater than amount we are looking for just continue.
            if( coins[i] > amount ) {
                continue;
            }
            //recurse with amount - coins[i] as new amount
            let val = this.minimumCoinTopDown(amount - coins[i], coins, map);
        
            //if val we get from picking coins[i] as first coin for current amount is less
            // than value found so far make it minimum.
            if( val < min ) {
                min = val;
            }
        }
        
        //if min is MAX_VAL dont change it. Just result it as is. Otherwise add 1 to it.
        min =  (min == Number.MAX_VALUE ? min : min + 1);
        
        //memoize the minimum for current amount.
        map.set(amount, min);

        return min;
    }
    /**
     * Bottom up way of solving this problem.
     * Keep input sorted. Otherwise temp[j-arr[i]) + 1 can become Integer.Max_value + 1 which
     * can be very low negative number
     * Returns Integer.MAX_VALUE - 1 if solution is not possible.
     */
    minCoinChange(amount, coins){
        
        let total = new Array(amount + 1).fill(  Number.MAX_VALUE );
        let res = new Array(amount + 1).fill( -1 );

        total[0] = 0;

        /*
            coins = [1,5,6,8]
            amount = 11

           0 1 2 3 4 5 6 7 8 9 10 11
         1 0 1 2 3 4 5 6 7 8 9 10 11
         5 0 1 2 3 4 1 2 3 4 5  2  3
         6 0 1 2 3 4 1 1 2 3 4  2  2
         8 0 1 2 3 4 1 1 2 1 2  2  2

         coins = [ 1,2,3 ];
         amount = 5;

           0 1 2 3 4 5
         1 0 1 2 3 4 5
         2 0 1 1 2 2 3
         3 0 1 1 1 2 2

         */
        for(let i=0; i < coins.length; i++){
            for(let j=1; j <= amount; j++){

                if(j >= coins[i]){
                    //total[j] = min(total[j], total[j-coins[i] + 1)

                    if ( total[j] > total[j - coins[i]] + 1 ) {

                        total[j] = total[j - coins[i]] + 1;
                        res[j] = i;
                    }
                }

            }
        }

        this.printCoinCombination(res, coins);

        return total[amount];
    }
    
    printCoinCombination(res, coins) {

        if (res[res.length - 1] == -1) {
            console.log("No solution is possible");
            return;
        }
        let start = res.length - 1;

        console.log("Coins used to form amount ");
        while ( start != 0 ) {
            let j = res[start];
            console.log(coins[j] + " ");
            start = start - coins[j];
        }
    }


}

//let amount = 13;
//let coins = [7, 3, 2, 6];

let coins = [ 1,2,3 ];
let amount = 5;

let m = new coinChangeMin();
console.log("Minimum Coins required to make change for " + amount + " are: " + m.minCoinChange(amount, coins));
//console.log("Minimum Coins required to make change for " + amount + " are: " + m.minimumCoinTopDown(amount, coins, new Map()));