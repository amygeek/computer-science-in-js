/**
 * find Common elements in two sorted array
 * a = [1,3,4,6,7,9]
 * b = [1,2,4,5,9,10,12]
 * result = [1,4,9]
 */

 let findCommonElm = (a, b) => {
     let i = 0;
     let aLen = a.length;
     let j = 0;
     let bLen = b.length;
     let res = [];
     while (i < aLen && j < bLen) {
         // if item is equal, push the item in the res and increase both list indexes
         if (a[i] === b[j]) {
            res.push(a[i]);
            i++;
            j++;
         // if a[i] is less than b[j], increase index i
         } else if (a[i] < b[j]) {
             i++;
         // otherwise; increase index j    
         } else {
             j++;
         }
     }
     return res;
 }

 console.log(findCommonElm([1,3,4,6,7,9], [1,2,4,5,9,10]));