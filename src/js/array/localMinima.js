/*
 Objective:  Given an array of leteger write an algorithm to find the local minima.

 Local Minima: An element is considered as local minima if it is less than both of its neighbors (if neighbors exist).

 Example:

 let [] arr = {11, 4, 2, 5, 11, 13, 5};
 Output: Local Minima is: 2

 let []arr = {1,2,3,4};
 Output: 1

 let []arr = {3};
 Output: 3

 let []arr = {6,4};
 Output: 4
 NOTE: There could be many local minimas, we need to find any one.
 */

/*
 Naïve: Use for loop and compare every element with its neighbor.
 Time Complexity – O(n)
 */
let findLocalMinima = arr => {
  let n = arr.length;

  if (n === 1) {
    return arr[0];
  } else if (n === 2 && arr[1] < arr[0]) {
    return arr[1];
  }
  let res = [];
  for (let i=1; i<n-1; i++) {
    if (arr[i] < arr[i-1] && arr[i] < arr[i+1]) {
      res.push(arr[i]);
    } else if ( arr[i-2] === undefined &&  arr[i-1] < arr[i]) {
      res.push(arr[i-1]);
    }
  }
  return res;
}

/*
 Binary Search Approach:

 Check if mid element is smaller than its left and right neighbors.
 If left neighbor is less than the mid element then make a recursive call to the left half of the array. 
 (There will be at least one local minima in the left half, take few examples to check)
 If right neighbor is less than the mid element then make a recursive call to the right half of the array.
 Time Complexity – O(logn)
 */

let findLocalMinima2 = ( arr, left, right ) => {

  //find the mid
  let mid = Math.floor((right + left)/2);
  let size = arr.length;
 
  //check the local minima (element is smaller than its left and right neighbors)
  //first check if left and right neighbor exists
  if( ( mid==0 || arr[mid] < arr[mid-1] ) && ( mid==size-1 || arr[mid] < arr[mid+1] ) ) {
    return arr[mid];
    //check if left neighbor is less than mid element, if yes go left
  } else if(mid > 0 && arr[mid] > arr[mid-1]){
    return findLocalMinima2( arr, left, mid );
  } else { //if(mid<size-1 && arr[mid]>arr[mid+1])
    return findLocalMinima2( arr, mid + 1, right);
  }

}

let arr = [11, 4, 2, 5, 11, 13, 5];

console.log(findLocalMinima2(arr, 0, arr.length));