/**
 Given coins denominations and total amount, find out the number of ways to make the change.
 EX, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

 No. of ways to make the change
 1, 1, 1, 1, 1, 1, 1
 1, 1, 1, 1, 1, 2
 1, 1, 1, 2, 2
 1, 2, 2, 2
 1, 1, 5
 2, 5
 Total Methods
 6

 Runtime Complexity
 O(m n) where m is number of denominations and n is amount.

 Memory Complexity
 Linear, O(n) where n is the amount.
 */
let solve_coing_change_dp = function(denominations, amount) {
    let solution = [];
    for (let i = 0; i < amount + 1 ; i++) {
        solution[i] = 0;
    }
    solution[0] = 1;  //Initially solution[0] = 1
    for (let j = 0; j < denominations.length; j++) {
        for (let i = denominations[j]; i < amount + 1 ; i++) {
            solution[i] += solution[i - denominations[j]];
        }
        console.log(solution)
    }
    console.log(solution)
    return solution[solution.length - 1];
};

//let denom = [1, 5, 10, 25];
let denom = [1, 2, 5];

//console.log(solve_coing_change_dp( denom, 100));  //242
console.log(solve_coing_change_dp( denom, 7));  //6
