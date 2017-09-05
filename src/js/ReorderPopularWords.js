/*
@desc sort words in an array based on the total count of the words,
rearrange the array to show the popularity, the highest count of the word comes first
@param Array
@return Array
Ex: var arr = ["pear", "pear", "cherry", "apple", "apple", "pear", "apple", "banana", "pear"];
return: ['pear' "pear", "pear", "pear", 'apple', 'apple', 'apple', 'banana', 'cherry' ]
*/
function ReorderPopularWords (arr) {
    
    var tempObj = {};
    var tempArr = [];
    
    //for (var i=0, l=arr.length; i<l; i++) {
    //    tempObj[arr[i]] = (tempObj[arr[i]] || 0) + 1;
    //}
    tempObj   = arr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    }, {});

    Object.keys(tempObj).forEach((key) => {
        tempArr.push([key, tempObj[key]]);
    })

    //sort tempArr by value by descending order
    tempArr.sort(function(a, b) {
        //sort ascending
        //return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;

        //sort descending
        return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
    });

    var i = 0;
    for (var j= 0, l1 = tempArr.length; j<l1; j++) {

        for (var k= 0, l2=tempArr[j][1]; k<l2; k++) {
            arr[i++] = tempArr[j][0];  //i will be the length of arr after outer for loop is done
        }
    }
    return arr;

}

export default ReorderPopularWords;