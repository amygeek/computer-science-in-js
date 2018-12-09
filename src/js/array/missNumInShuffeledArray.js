/**
 * find the missing number
 * array 1 is non negative number
 * array 2 is a shuffeled version of array 1 integer is missing
 * finder([1,2,3,4,5,6,7], [3,7,2,1,4,6])  // 5
 */

 let finder = (a, b) => {
     a.sort((a, b) => a - b);
     b.sort((a, b) => a - b);
     let n = a.length;
     for (let i = 0; i < n; i++) {
         if (a[i] !== b[i]) {
             return a[i];
         }
     }
     return a[n-1] // if it gets here, it must be the last element in array a since array a has one extra integer than array b
 }

 let finder2 = (a, b) => {
     let aLen = a.length;
     let bLen = b.length;
     let map = new Map();
     for (let i = 0; i < bLen; i++) {
        let num = map.get(b[i]);
        if (num) {
            map.set(b[i], num + 1);
        } else {
            map.set(b[i], 1);
        }
     }
     for (let i = 0; i < aLen; i++) {
         if (!map.get(a[i])) {
             return a[i];
         }
     }
 }

 let finder3 = (a, b) => {
     let s1 = new Set(a);
     let s2 = new Set(b);
     return s1 - s2;
 }

 console.log(finder([1,2,3,4,5,6,7], [3,7,2,1,4,6]));
 console.log(finder2([1,2,3,4,5,6,7], [3,7,2,1,4,6]));
 console.log(finder3([1,2,3,4,5,6,7], [3,7,2,1,4,6]));