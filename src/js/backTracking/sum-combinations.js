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
 * @param current_sum
 * @param start
 * @param output
 * @param result
 */
let print_all_sum_rec = function(target, current_sum, start, output, result) {
    if (current_sum === target) {
        result.push(output.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            output.push(i);
            print_all_sum_rec(target, temp_sum, i, output, result);
            output.pop();
        } else {
            return;
        }
    }
};

let print_all_sum = function(target) {
    let output = [];
    let result = [];
    print_all_sum_rec(target, 0, 1, output, result);

    return result;
};

let printSubsets = (n, x) => {
    if(n==0){
        console.log(x);
        return;
    }else{
        for(let i=1;i<=n;i++){
            x = x + i;
            printSubsets(n - i, x);
            x = x.substr(0,x.length-1);
        }
    }
}
printSubsets(4, "");

console.log(print_all_sum(4));