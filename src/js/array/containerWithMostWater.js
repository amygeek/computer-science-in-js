/*
 Given n non-negative integers a_1, a_2, ..., a_n  where each represents a point at coordinate  (i, a_i) .
 'n' vertical lines are drawn such that the two endpoints of line i is at  (i, a_i)  and (i, 0).
 Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 The program should return an integer which corresponds to the maximum area of water that can be contained
 Input : [1, 5, 4, 3]
 Output : 6
 Explanation :
 5 and 3 are distance 2 apart.
 So the size of the base = 2.
 Height of container = min(5, 3) = 3.
 So total area = 3 * 2 = 6

 Input : [3, 1, 2, 4, 5]
 Output : 12
 Explanation :
 5 and 3 are distance 4 apart.
 So the size of the base = 4.
 Height of container = min(5, 3) = 3.
 So total area = 4 * 3 = 12

 Note 1 : When you consider a1 and aN, then the area is (N-1) * min(a1, aN).
 Note 2 : The base (N-1) is the maximum possible.
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
/*
 Input : [1, 5, 4, 3]
 Output : 6
 Explanation :
 5 and 3 are distance 2 apart.
 So the size of the base = 2.
 Height of container = min(5, 3) = 3.
 So total area = 3 * 2 = 6
 */

//let a2 = [3, 1, 2, 4, 5];  //min(3, 5) * (4 - 0) -> 3 * 4 =12
let a2 = [2, 5, 3, 7];  //min(5, 7) * (3 - 1) -> 5 * 2 =10

console.log(maxArea(a2));