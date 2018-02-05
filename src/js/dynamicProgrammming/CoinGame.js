/*
 Coin In a Line Game
 the coins-in-a-line game, an even num­ber, n, of coins, of var­i­ous denom­i­na­tions from var­i­ous coun­tries, are placed in a line.
 Two play­ers, who we will call Alice and Bob, take turns remov­ing one of the coins from either end of the remain­ing line of coins.
 That is, when it is a player’s turn, he or she removes the coin at the left or right end of the line of coins and adds that coin
 to his or her col­lec­tion. The player who removes a set of coins with larger total value than the other player wins,
 where we assume that both Alice and Bob know the value of each coin.
 Exam­ple:

 coins []  =  { 6, 9, 1, 2, 16, 8}

 trial 1: (players will pick the best option available for them)
 coins [] = { 6, 9, 1, 2, 16, 8} , Alice picks 8
 coins [] = { 6, 9, 1, 2, 16}, Bob picks 16
 coins [] = { 6, 9, 1, 2}, Alice picks 6
 coins [] = { 9, 1, 2}, Bob picks 9
 coins [] = {1, 2}, Alice picks 2
 coins [] = {1}, Bob picks 1
 Alice: 8+6+2 =16 Bob: 16+9+1=26 => Alice Lost

 So clearly picking up the best in each move is not good for Alice. What else Alice can do to win the game.

 trial 2: (Alice thinks about Bob's move, Will discuss the strategy in solution)
 coins [] = { 6, 9, 1, 2, 16, 8} , Alice picks 6
 coins [] = { 9, 1, 2, 16, 8}, Bob picks 9
 coins [] = { 1, 2, 16, 8}, Alice picks 1
 coins [] = 2, 16, 8}, Bob picks 8
 coins [] = {2, 16}, Alice picks 16
 coins [] = {2}, Bob picks 2
 Alice: 6+1+16 =23 Bob: 9+8+2=19 => Alice Won

 So this time Alice has won. Let's see the solution and discuss what Alice has done to win the game.
 */

let coinGame = (arr) => {

    let n = arr.length;
    let res = [];
    for(let i=0; i<n; i++) {
        res.push(new Array(n).fill(0));
    }
    for (let start=0; start<n; start++) {

        for (let i= 0, j=start; j< n; i++, j++) {

            /*
             1. The user chooses the ith coin with value Vi: The opponent either chooses (i+1)th coin or jth coin.
             The opponent intends to choose the coin which leaves the user with minimum value.
             i.e. The user can collect the value Vi + min(F(i+2, j), F(i+1, j-1) )

             2. The user chooses the jth coin with value Vj: The opponent either chooses ith coin or (j-1)th coin.
             The opponent intends to choose the coin which leaves the user with minimum value.
             i.e. The user can collect the value Vj + min(F(i+1, j-1), F(i, j-2) )

             F(i, j)  represents the maximum value the user can collect from
             i'th coin to j'th coin.

             F(i, j)  = Max(Vi + min(F(i+2, j), F(i+1, j-1) ),
             Vj + min(F(i+1, j-1), F(i, j-2) ))
             Base Cases
             F(i, j)  = Vi           If j == i
             F(i, j)  = max(Vi, Vj)  If j == i+1

             Here x is value of F(i+2, j),
             y is F(i+1, j-1) and z is F(i, j-2) 
             */
            let x = ( i+2 < j ) ? res[i+2][j] : 0;  //user chooses i, The opponent chooses i+1
            let y = ( i+1 <= j-1 ) ? res[i+1][j-1] : 0; //user chooses i, The opponent chooses j or user chooses j, The opponent chooses i
            let z = (i <= j - 2) ? res[i][j-2] : 0; //user choose j, The opponent chooses j-1

            res[i][j] = Math.max(arr[i] + Math.min(x, y), arr[j] + Math.min(y, z));

            //For Debugging
            //console.log(` x = ${x}, y = ${y}, z = ${z} `);
            //console.log(` i = ${i}, j = ${j}, res[i][j] = ${res[i][j]} `);
        }
    }
    console.log(res)
    return res[0][n-1];
}

let arr = [6, 9, 1, 2, 16, 8];

console.log(coinGame(arr));
