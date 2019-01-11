// given an array of numbers in sorted order, acount the pairs of numbers whose sum is less than K

let countPair = (arr, k) => {
    let i = 0;
    let j = arr.length - 1;
    let count = 0;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum < k) {
            count += j - i;
            i++;
        } else {
            j--;
        }
    }
    return count;
}

let arr = [2, 4, 6, 8, 9];
let k = 14;
console.log(countPair(arr, 14));

// given an range of numbers, count the numbers which have same first and last digit
// ex: between 7 and 20 such numbers are 8,9,11
// https://www.geeksforgeeks.org/count-numbers-first-last-digits/

//Suppose there are millions of numbers and you have to print max 20 elements. How will you do that?

//Suppose there are 'n' bags containing different amount of chocolates and there
// is wizard and a kid. At every second the kid eats all the chocolates from bag
// containing maximum number of chocolates and the wizard refills with half the
// chocolates it was containing earlier. Find how many chocolates has the kid eaten
// at t seconds