
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


    minCoinDynamic( amount, coins) {

        // this will store solution for all the values -- from 0 to given amount.
        let res = [];

        let CC = new Array(coins.length); // resets for every smaller problems

        // and minimum in it is the optimal
        // solution for the smaller problem.
        res[0] = 0; // 0 coins are required to make the change for 0
        // now solve for all the amounts
        for (let amt = 1; amt <= amount; amt++) {

            for (let j = 0; j < CC.length; j++) {
                CC[j] = -1;
            }
            // Now try taking every coin one at a time and fill the solution in
            // the CC[]
            for (let j = 0; j < coins.length; j++) {
                if (coins[j] <= amt) { // check if coin value is less than
                    // amount
                    CC[j] = res[amt - coins[j]] + 1; // if available,
                    // select the
                    // coin and add
                    // 1 to solution
                    // of
                    // (amount-coin
                    // value)
                }
            }
            //Now solutions for amt using all the coins is stored in CC[]
            //			take out the minimum (optimal) and store in res[amt]
            //console.log(CC)
            res[amt] = -1;
            for(let j=1;j<CC.length;j++){

                if(CC[j] > 0 && ( res[amt] == -1 || res[amt] > CC[j] )){
                    res[amt] = CC[j];
                }
            }

        }
        //return the optimal solution for amount
        return res[amount];

    }

}

let coins = [ 1, 2 ];
let amount = 7;
let m = new coinChangeMin();
console.log("Minimum Coins required to make change for " + amount + " are: " + m.minCoinDynamic(amount, coins));