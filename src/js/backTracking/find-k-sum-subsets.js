let get_bit = function(num, bit){
    let temp = (1 << bit);
    temp = temp & num;
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
};

//let arr = [1, 3, 5, 21, 19, 7, 2, 5];
let arr = [2,5,7];
let sets = [];
get_k_sum_subsets_1(arr, 7, sets);
console.log(sets);

