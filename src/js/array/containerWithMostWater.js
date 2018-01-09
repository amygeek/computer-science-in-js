/*
 Given n non-negative integers a_1, a_2, ..., a_n  where each represents a point at coordinate  (i, a_i) .
 'n' vertical lines are drawn such that the two endpoints of line i is at  (i, a_i)  and (i, 0).
 Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 The program should return an integer which corresponds to the maximum area of water that can be contained
 */
let maxArea = (arr) => {

    let i=0;
    let j = arr.length -1;
    let area = 0;

    while( i < j ) {
        //get min height of container * distance
        area = Math.max(area, Math.min( arr[i], arr[j]) * (j - i));

        if ( arr[i] < arr[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
}

let a1 = [1, 5, 4, 3];
let a2 = [3, 1, 2, 4, 5];

/*
 Input : [1, 5, 4, 3]
 Output : 6
 Explanation :
 5 and 3 are distance 2 apart.
 So the size of the base = 2.
 Height of container = min(5, 3) = 3.
 So total area = 3 * 2 = 6
 */
console.log(maxArea(a1));  //6