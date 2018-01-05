/**
 * Find all subsets of a given set of integers.
 * @param num
 * @param bit
 * @returns {number}
 *
     Runtime Complexity
     Exponential, O(2n) - where 'n' is number of integers in the given set.

     Memory Complexity
     Constant, O(1)
 */
let get_bit = function(num, bit){
    let temp = (1 << bit);
    temp = temp & num;
    if (temp === 0){
        return 0;
    }

    return 1;
};

let get_all_subsets = function(v) {
    let sets = new Set();
    let subsets_count = Math.pow(2, v.length);
    for (let i = 0; i < subsets_count; i++) {
        let st = new Set();
        for (let j = 0; j < v.length; j++) {
            if (get_bit(i, j) === 1) {
                st.add(v[j]);
            }
        }

        sets.add(st);
    }
    return sets;
};

let arr = [2, 3, 4];

let sets = get_all_subsets(arr);

/**
 Set {}
 Set { 2 }
 Set { 3 }
 Set { 2, 3 }
 Set { 4 }
 Set { 2, 4 }
 Set { 3, 4 }
 Set { 2, 3, 4 }
 */
// for(let v of sets) {
//     console.log(v);
// }


let getAllSubSets = (sets, arr, n, index) => {

    if ( n === index) {
        //base case: add an empty set
        let st = new Set();
        sets.add(st);
    } else {
        sets = getAllSubSets(sets, arr, n, index + 1);
        let item = arr[index];
        let moreSet = new Set();
        for (let set of sets) {
            let st = new Set();
            for (let s of set) {
                st.add(s);
            }
            st.add(item);
            moreSet.add(st);

        }

        for (let set of moreSet) {
            sets.add(set);
        }

    }
    return sets;

}

let st = new Set();
console.log(getAllSubSets(st, [0,1,2], 3, 0));

