
/**
 * If only one egg is available and we wish to be sure of obtaining the right result, the experiment can be carried out in only one way.
 * Drop the egg from the first-floor window; if it survives, drop it from the second floor window. Continue upward until it breaks.
 * In the worst case, this method may require 36 droppings. Suppose 2 eggs are available. What is the least number of egg-droppings
 * that is guaranteed to work in all cases?
 The problem is not actually to find the critical floor, but merely to decide floors from which eggs should be dropped so that total number of trials are minimized.
 When we drop an egg from a floor x, there can be two cases (1) The egg breaks (2) The egg doesn’t break.

 1) If the egg breaks after dropping from xth floor, then we only need to check for floors lower than x with remaining eggs; so the problem reduces to x-1 floors and n-1 eggs
 2) If the egg doesn’t break after dropping from the xth floor, then we only need to check for floors higher than x; so the problem reduces to k-x floors and n eggs.

 Since we need to minimize the number of trials in worst case, we take the maximum of two cases. We consider the max of above two cases for every floor
 and choose the floor which yields minimum number of trials.

 k ==> Number of floors
 n ==> Number of Eggs
 eggDrop(n, k) ==> Minimum number of trials needed to find the critical
 floor in worst case.
 eggDrop(n, k) = 1 + min{max(eggDrop(n - 1, x - 1), eggDrop(n, k - x)):
 x in {1, 2, ..., k}}

 Time Complexity: O(nk^2)
 Auxiliary Space: O(nk)

 floors
 egg   1   2   3   4   5   6
 1   1   2   3   4   5   6
 2   1   2

 if ( i > j )
 res[i][j] = res[i-1][j]
 else
 //res[i-1][k-1] means the egg breaks which is one egg less and one floor less to go
 // res[i][j-k] means the egg doesn't break and we have j-k floor to go
 res[i][j] = 1 + min( max(res[i-1][k-1], res[i][j-k]

 k is between 1 to j
 */
class EggDropping {

    calculate( eggs, floors){

        let res = [];

        for ( let i=0; i<= eggs; i++ ) {
            res.push( new Array( floors+1).fill(0) );
        }
        for(let i=0; i <= floors; i++){
            res[1][i] = i;
        }

        let min =0;

        for(let i = 2; i <= eggs; i++){
            for(let j = 1; j <=floors; j++){
                res[i][j] = Number.MAX_VALUE;
                for(let k = 1; k <=j ; k++){
                    min = 1 + Math.max(res[i-1][k-1], res[i][j-k]);
                    if(min < res[i][j]){
                        res[i][j] = min;
                    }
                }
            }
        }
        console.log(res)
        return res[eggs][floors];
    }
    
    calculateRecursive( eggs, floors){
        if(eggs == 1){
            return floors;
        }
        if(floors == 0){
            return 0;
        }
        let min = 1000;
        for(let i=1; i <= floors; i++){
            let val = 1 + Math.max(this.calculateRecursive(eggs-1, i-1), this.calculateRecursive(eggs, floors-i));
            if(val < min){
                min = val;
            }
        }
        return min;
    }
    
}

let ed = new EggDropping();
let total = ed.calculate(2,6);

console.log( total );
console.log( ed.calculateRecursive(2, 6));