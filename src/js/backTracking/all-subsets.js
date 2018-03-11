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
let getBit = function(num, bit){
    let temp = (1 << bit);
    temp = temp & num;
    if (temp === 0){
        return 0;
    }

    return 1;
};

let getAllSubsets = function(arr) {

    let n = arr.length;
    let sets = new Set();
    let count = Math.pow(2, n);
    
    for (let i = 0; i < count; i++) {

        let st = new Set();
        
        for (let j = 0; j < n; j++) {
            if (getBit(i, j) === 1) {
                st.add(arr[j]);
            }
        }

        sets.add(st);
    }
    return sets;
};

/**
 Set {
  Set {},
  Set { 1 },
  Set { 2 },
  Set { 1, 2 },
  Set { 3 },
  Set { 1, 3 },
  Set { 2, 3 },
  Set { 1, 2, 3 } }
 */
let arr = [1,2,3];

console.log( getAllSubsets(arr) );


let getAllSubsets2 = (sets, arr, n, index) => {

    if ( n === index) {
        //base case: add an empty set
        let st = new Set();
        sets.add(st);
    } else {
        sets = getAllSubsets2(sets, arr, n, index + 1);
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
console.log(getAllSubsets2(st, [1,2,3], 3, 0));



