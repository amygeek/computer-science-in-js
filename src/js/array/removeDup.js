//only work for sorted array
var removeDuplicates = function(nums) {
    let i=0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    nums.splice(i+1);
    return nums;
};


let arr = [1,2,2,3,5,5,5,7,7, 7 ];
removeDuplicates(arr); //[ 1, 2, 3, 4, 5, 7 ]
console.log(arr);

let removeDuplicates2 = ( arr ) => {

    for ( let i=0; i<arr.length - 1; i++ ) {
       for ( let j=i+1; j< arr.length; j++) {
           while ( arr[i] == arr[j]) {
               arr.splice(j, 1);
           }
       }
    }
}

let arr2 = [1,2,2,3,5,7,7, 7,3,4,4,5,5 ];
removeDuplicates2(arr2);
console.log(arr2);