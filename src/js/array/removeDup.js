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

let nums = [1,1,2,2,3,4,4];
removeDuplicates(nums)
console.log(nums);