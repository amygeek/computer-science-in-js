/**
 * We are given a set of N positive integers and we have to find all the possible
 * subsets of this set of integers, that sum up to the number K.
 * We know that for a set of n elements there are 2n subsets.
 * For example, a set with 3 elements will have 8 subsets.

 Runtime Complexity
 Exponential, O(2n) - where 'n' is number of integers in the given set.

 Memory Complexity
 Constant, O(1)

 n = size of given integer set
 subsets_count = 2^n
 for i = 0 to subsets_count
    form a subset using the value of 'i' as following:
        bits in number 'i' represent index of elements to choose from original set,
    if a specific bit is 1 choose that number from original set and add it to current subset,
        e.g. if i = 6 i.e 110 in binary means that 2nd and 3rd elements in original array need to be picked.
    if subset elements sum up to K (required sum), add current subset to list of all subsets
 */
let get_bit = function(num, bit){
    let temp = (1 << bit);
    temp = temp & num
    if (temp === 0){
        return 0;
    }
    return 1;
}

let get_k_sum_subsets_1 = function(v, target_sum, sets) {
    let subsets_count = Math.pow(2, v.length);
    for (let i = 0; i < subsets_count; i++) {
        let sum = 0;
        let st = new Set([]);
        for (let j = 0; j < v.length; j++) {
            if (get_bit(i, j) === 1) {
                sum = sum + v[j];
                if (sum > target_sum) {
                    break;
                }
                st.add(v[j]);
            }
        }

        if (sum === target_sum) {
            sets.push(st);
        }
    }

    return sets;
};

let v = [2, 5, 7];  //{} {2}, {5}, {7} {2,5} {5,7} {2, 7} {2,5,7}
let target_sum = 7;
let sets = [];

//console.log(get_k_sum_subsets_1(v, target_sum, sets));  //[ Set { 2, 5 }, Set { 7 } ]

/**
 * In this solution we will recursively generate subsets of the given list. While generating a subset,
 * if the subset's sum is already greater than the target sum(K), we will drop/skip that subset
 * and continue generating rest of the subsets.

 Runtime Complexity
 Exponential, O(2n) - where 'n' is number of integers in the given set.

 Memory Complexity
 Logarithmic, O(logn).
 */
let get_k_sum_subsets_rec = function(list, partial_list, target_sum, sets, array_stack) {
    let list_sum = 0;
    for (let i = 0; i < partial_list.length; i++) {
        list_sum += partial_list[i];
    }

    if (list_sum === target_sum && partial_list.length > 0) {
        sets.push(partial_list);
    } else if (list_sum > target_sum) {
        return;
    } else {
        for (var i = 0; i < list.length; i++) {

            // In JS array is passed by reference so we need to save array's state
            array_stack.push(list.slice());
            array_stack.push(partial_list.slice());
            let new_partial_list = partial_list.slice();
            new_partial_list.push(list[i]);
            let new_list = list.splice(i + 1);
            get_k_sum_subsets_rec(new_list, new_partial_list, target_sum, sets, array_stack);
            partial_list = array_stack.pop();
            list = array_stack.pop();
        }
    }
};

let get_k_sum_subsets_2 = function(list, target_sum, sets) {
    let partial_list = [];
    let array_stack = [];
    get_k_sum_subsets_rec(list, partial_list, target_sum, sets, array_stack);
    return sets;
};

console.log(get_k_sum_subsets_2(v, target_sum, sets));  //[ Set { 2, 5 }, Set { 7 } ]
