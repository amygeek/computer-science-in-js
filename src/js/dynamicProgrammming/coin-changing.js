/**
 Given coins coins and total amount, find out the number of ways to make the change.
 EX, we have coin coins 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

 No. of ways to make the change
 1, 1, 1, 1, 1      (1)
 1, 1, 1, 2         (2)
 1, 1, 3            (3)
 1, 2, 2            (4)
 2, 3               (5)

 Total Methods
 5
                        total = 5
          coins 0   1   2   3   4   5
            1   1   1   1   1   1   1
            2   1   1   2   2   3   3
            3   1   1   2   3   4   5

                if j >= coins[i]
                    res[i] += res[i] + res[j-coins[i]

 Runtime Complexity
 O(m n) where m is number of coins and n is amount.

 Memory Complexity
 Linear, O(n) where n is the amount.
 */

class CoinChanging {

    coinChange(coins, amount ) {

        // intialize an array of zeros with indices up to amount
        let res = new Array( amount + 1).fill(0);

        //this will be only selected if you don't select any coin
        res[0] = 1;


        for (let i = 0; i < coins.length; i++) {

            // we start bottom up, each time reducing change amount with current coin.
            for (let j = 1; j <= amount; j++) {

                // ways to create change is equivalent to reducing the problem to a known problem
                // and gaining all the ways to solve for smaller problems
                if ( j >= coins[i] ) {
                    res[j] += res[j - coins[i]];
                }

            }
        }
        return res[amount];
    }



    //numOfCoins is length of the coins. since index starts at 0. if len of coins is 3, numOfCoins will be passed as 2
    coinChangeRec (coins, numOfCoins, amount) {

        if(amount === 0) return 1; // Perfect!

        if(amount < 0) return 0; // No res exists for negative amount

        if(numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

        return this.coinChangeRec(coins, numOfCoins, amount - coins[numOfCoins]) + this.coinChangeRec(coins, numOfCoins - 1, amount);
    }

    printSolution(total, coins ){
        let result = [];
        this.printActualSolution(result, total, coins, 0);
    }

    printActualSolution(result, total, coins, pos){

        if(total == 0){
            let str = "";
            for(let r of result){
                str += r + " ";
            }
            console.log( str );
        }
        for(let i=pos; i < coins.length; i++){
            if(total >= coins[i]){
                result.push(coins[i]);
                this.printActualSolution( result, total - coins[i], coins, i );
                result.splice ( result.length - 1 );  //remove the last item in result
            }
        }
    }

}

let C = new CoinChanging();

let coins = [1, 2, 3];
//let coins = [1, 5, 10, 25];
//console.log(coinChange( coins, 100));  //242

console.log(C.coinChange( coins, 5));  //6
console.log(C.coinChangeRec(coins, coins.length - 1, 5));

C.printSolution( 5, coins);

