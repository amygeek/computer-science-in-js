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
let pickMe = (num, bit) => {
  let temp = 1 << bit;
  if (temp && num > 0) {
    return true;
  }
  return false;
}

let getAllSubsets = function(v) {
  let sets = [];
  let n = v.length;
  let count = Math.pow(2, n);
  for (let i=0; i<count; i++) {
    let st = new Set();
    for (let j=0; j<n; j++) {
      if (pickMe(i, j)) {
        st.add(v[j]);
      }
    }
    sets.push(st);
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


let get_all_subsets = function(v, sets) {
  let res = [...Array(v.length)];
  getSubsetsRec(v, sets, res, 0);
  return sets;
};
let getSubsetsRec =(v, sets, res, i) => {
  if (i === v.length) {
    sets.push(res.slice());
  } else {
    res[i] = null;
    getSubsetsRec(v, sets, res, i+1);
    res[i] = v[i];
    getSubsetsRec(v, sets, res, i+1);
  }
  
}
console.log(get_all_subsets([8,13,3,22,17,39,87,45,36], [])) // 512
