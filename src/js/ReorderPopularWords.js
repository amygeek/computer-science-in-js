/*
@desc find the duplication words in an array. based on the total count, rearrange the array to show the popularity
@param Array Object
@return Array Object
Ex: var arr = ["pear", "pear", "cherry", "apple", "apple", "pear", "apple", "banana", "pear"];
return: ['pear', 'apple', 'cherry', 'banana']
*/
function ReorderPopularWords (arr) {
    
    var temp = {};
    var newArr = [];
    
    for (var i=0, l=arr.length; i<l; i++) {
        
        if (arr[i] in temp) {
            temp[arr[i]] += 1;
        } else {
            temp[arr[i]] = 1;
        }
        
    }  // temp = {pear: 4, cherry: 1, apple: 3, banana: 1}
    
    
    for (var k in temp) {
        if (temp.hasOwnProperty(k)) {
            newArr.push([k, temp[k]]);
           
        }
    }  // newArr = [['pear', 4], ['cherry', 1], ['apple', 3], ['banana', 1]]
    
    
    //sort newArr by descending order
    newArr.sort(function(a, b) {
        //sort ascending
        //return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
        
        //sort descending
        return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
    });  // newArr = [['pear', 4], ['apple', 3], ['cherry', 1], ['banana', 1]]
    
    //after the array is sorted descending order by the count value, get the first index on each array
    for (var j= 0, len = newArr.length; j<len; j++) {
        newArr[j] = newArr[j][0];
    }
    return newArr;  // ['pear', 'apple', 'cherry', 'banana']

}

export default ReorderPopularWords;