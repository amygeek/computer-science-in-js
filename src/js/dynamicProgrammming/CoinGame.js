/*
 Coin In a Line Game
 Input: row of n even coins of values v1 ... vn
 Goal: maximize value of coins selected

 v(i, j): max value we can definitely win if it is our turn and only coins v1...vj remain
 v(i, i) v(i,i+1) v(i, i+2) v(i, i+3)...
 v(i,j) = max( vi + min( v(i+1, j-1), v(i+2, j ), vj + min(i, j-2), v(i+1,j-1) )

 ---------------------------------------------------
  vi  | vi+1  | ...  |   |   | vj  |
 ---------------------------------------------------
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

    /*
    res:
     [ [ 3, 9, 4, 11 ],
       [ 0, 9, 9, 9 ],
       [ 0, 0, 1, 2 ],
       [ 0, 0, 0, 2 ] ]
     */
    return res[0][n-1];
}

let arr = [3, 9, 1, 2];

console.log(coinGame(arr));
