/**
 *findSumOfTwo function return true if
 * there are two values in array who
 * sum to value and returns false otherwise
 */

/*
Runtime Complexity
Linear, O(n).

Memory Complexity
Linear, O(n).
*/
let findSumOfTwo = function(A, val) {
  let found_values = new Set();
  for (let a in A) {
    if (found_values.has(val - A[a])) {
      return true;
    }

    found_values.add(A[a]);
  }

  return false;
};

/*
	Runtime Complexity
	Linearithmic, O(n logn).

	Here 'n logn' is the time complexity required to sort the array. 
	For a sorted array, the complexity would be linear, O(n).

	Memory Complexity
	Constant, O(1).
	
	this solution works only if data is sorted.
    it does not require any extra memory.
*/

let findSumOfTwoV2 = (A, val) => {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    let s = A[i] + A[j];
    if (s === val) {
      return `found at index  ${i} and ${j}` ;
    }

    if (s < val) {
      i++;
    } else {
      j--;
    }
  }
  
  return false;
}

export {findSumOfTwo, findSumOfTwoV2};