/**
 * Given N people on MxM grid, find the point that requires the least total distance covered by all the ​people to meet at that point.
 Distance between two points.
 Centroid of a two-dimensional region.

 Solution #1
 Runtime Complexity
 Cubic, O(n3).

 If number of people 'n' is equal to size of the grid 'm', the time complexity becomes cubic.
 In the worst case, if there is a person on each point of the grid, the complexity would become O(n4).

 Memory Complexity
 Linear, O(n).

 'n' is the number of people on the grid.

 The first solution is very straightforward, but it has a greater time complexity.
 We can calculate the distance between two points using the following Euclidean distance formula.

d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2-y1));
 ​
 ​​
 */
class point {
    constructor( x, y) {
        this.x = x;
        this.y = y;
    }
    calDistance( p ) {
        return Math.sqrt( (p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y) );
    }
    calSumOfDistance(points) {
        let sum = 0;
        for(let i=0; i<points.length; i++) {
            sum += this.calDistance(points[i]);
        }
        return sum;
    }
}

let shortest_distance_travelled = function(m, points) {
    let pt = new point(1, 1);
    let min_distance = pt.calSumOfDistance(points);
    let minPt = new point(1, 1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < m; j++) {
            pt.x = i;
            pt.y = j;
            let distance = pt.calSumOfDistance(points);
            if (distance < min_distance) {
                min_distance = distance;
                minPt.x = pt.x;
                minPt.y = pt.y;
            }
        }
    }
    return minPt;
};

/*
 Solution #2
 Runtime Complexity
 Linear, O(n).

 Here 'n' is the number of people on the grid.

 Memory Complexity
 Linear, O(n).

 Here 'n' is the number of people on the grid.

 The second solution uses the 'centroid' to find the minimum distance travelled point.

 The centroid of a two-dimensional region is the arithmetic mean or average position of all the points.
 We can calculate the centroid of all the points with people on the grid and that will be the
 minimum distance travelled point. It is the average of x-coordinates and y-coordinates.
 */

let shortestDistance = function(m, points) {
    let minPt = new point(0, 0);
    let x = 0;
    let y = 0;

    // calculate the centroid
    let centroid = new point(0, 0);
    for (let i = 0; i < points.length; i++) {
        x += points[i].x;
        y += points[i].y;
    }

    centroid.x = parseInt(Math.round(x / points.length));
    centroid.y = parseInt(Math.round(y / points.length));

    // initialize the minPt to centroid
    minPt.x = centroid.x;
    minPt.y = centroid.y;

    let minDistance = minPt.calSumOfDistance(points);

    // checking points surrounding the potential centroid
    for (let i = minPt.x - 1; i < minPt.x + 2; i++) {
        for (let j = minPt.y - 1; j < minPt.y + 2; j++) {
            if (i < 1 || j > m) {
                continue;
            }

            let pt = new point(i, j);
            let distance = pt.calSumOfDistance(points);
            if (distance < minDistance) {
                minDistance = distance;
                minPt.x = pt.x;
                minPt.y = pt.y;
            }
        }
    }
    return minPt;
};


//let distance = shortest_distance_travelled(4, [{x:1,y:2}, {x:3, y:2}]);  //point { x: 1, y: 2 }
let distance = shortestDistance(6, [{x:1,y:2}, {x:3, y:3}, {x:4, y:2}]);  //point { x: 3, y: 3 }
console.log(distance);