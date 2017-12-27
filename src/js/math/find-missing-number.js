/**
 * Given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one. Find the missing number.
 * Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).
 * @param input
 * @returns {number}
 * uses the arithmetic series sum formula.
 * Sum(1−n)= ​n(n+1) / 2

 ​​
 */
let find_missing = function(input) {
    //  calculate sum of all integers
    //  in input list

    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    return sum_of_n - actual_sum;
};

let arr = [3, 5, 7, 8, 9, 2, 1, 4];

console.log(find_missing(arr));  //6
