//Return an array consisting of the largest number from each provided sub-array
let largestOfFour = (arr) => {
    let largest = [0,0,0,0];
    for(let i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
            }
        }
    }
    return largest;
}

let largestOfFour2 = (arr) => {
    return arr.map( (subArray) => {
        return subArray.reduce( (previousNumber, currentNumber) => {
            return (currentNumber > previousNumber) ? currentNumber : previousNumber;
        }, 0);
    });
}

let largestOfFour3 = (arr) => {

    return arr.map( subArray => {
        return Math.max.apply(null, subArray);
    });
}

let arr = [[10, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

console.log(largestOfFour2(arr));  //[ 10, 27, 39, 1001 ]