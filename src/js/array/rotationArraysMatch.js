/**
 * given 2 array (assume no duplicates)
 * check if 1 array is rotation of another - return true or false
 * same size and element but start index is different
 */

 let rotationLists = (list1, list2) => {
     let n1 = list1.length;
     let n2 = list2.length;
     if (n1 !== n2) {
         return false;
     }
     let startElm = list1[0];
     let startIndex = 0;

     // loop through list2 to find the same value of startElm in list1 and update startIndex with the found index
     for (let i = 0; i < n2; i++) {
         if (list2[i] === startElm) {
             startIndex = i;
             break;
         }
     }
     //can't find the matching element in list2; return false
     if (startIndex === 0) {
         return false;
     }

     // now we found the startIndex in list2, we will compare the list1 and list2 from the start index.
     // list1 start index is 0
     for (let i = 0; i < n1; i++) {
        let index = (startIndex + i) % n2;
        if (list1[i] !== list2[index]) {
            return false;
        }
     }

     return true;
 }

 console.log(rotationLists([1,2,3,4,5,6,7], [4,5,6,7,1,2,3]))  // true

 console.log(rotationLists([1,2,3,4,5,6,7], [4,5,6,8,1,2,3]))  // false