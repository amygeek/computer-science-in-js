/**
 * Given a positive integer, print all possible sum combinations using positive integers.
 * For example, if we are given input '5', these are the possible sum combinations.
     1, 4
     2, 3
     1, 1, 3
     1, 2, 2
     1, 1, 1, 2
     1, 1, 1, 1, 1
 * @param target
 * @param sum
 * @param start
 * @param output
 * @param result
 *
 Runtime Complexity
 Exponential.

 Memory Complexity
 Linear, O(n).

 sum: 0, start: 1, output: [ ]
 sum: 1, start: 1, output: [ 1 ]
 sum: 2, start: 1, output: [ 1,1 ]
 sum: 3, start: 1, output: [ 1,1,1 ]
 sum: 4, start: 1, output: [ 1,1,1,1 ]
 Output: 1, 1, 1, 1

 sum: 4, start: 2, output: [ 1,1,2 ]
 Output: 1, 1, 2

 sum: 3, start: 2, output: [ 1,2 ]
 sum: 4, start: 3, output: [ 1,3 ]
 Output: 1, 3

 sum: 2, start: 2, output: [ 2 ]
 sum: 4, start: 2, output: [ 2,2 ]
 Output: 2, 2

 sum: 3, start: 3, output: [ ]
 */
let printAllSumRec = function(target, sum, start, output, result) {

    if (sum === target) {
        result.push(output.slice());
    }

    for (let i = start; i < target; i++) {

        let x = sum + i;

        if (x <= target) {

            output.push( i );
            printAllSumRec(target, x, i, output, result);
            output.pop();

        } else {
            return;
        }
    }
};

let printAllSum = function(target) {

    let output = [];
    let result = [];
    printAllSumRec(target, 0, 1, output, result);

    return result;
};

console.log( printAllSum(5) );

/*
 111
 12
 21
 3
 */
let printCombinations = ( n, x) => {
    if( n == 0 ){
        console.log(x);
        return;
    } else {
        for(let i=1; i<=n; i++){
            x = x + i;
            printCombinations(n - i, x);
            x = x.substr(0, x.length - 1);
        }
    }
}

printCombinations(3,"");
