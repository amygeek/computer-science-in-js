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
 */
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calculate_distance(p) {
        let distance = Math.sqrt((p.x - this.x) * (p.x - this.x) +
            (p.y - this.y) * (p.y - this.y));
        return distance;
    }

    calculate_sum_of_distances(points) {
        let distance_sum = 0;
        for (let i = 0; i < points.length; i++) {
            distance_sum += this.calculate_distance(points[i]);
        }
        return distance_sum;
    }
}

let shortest_distance_travelled = function(m, points) {
    let pt = new point(1, 1);
    let min_distance = pt.calculate_sum_of_distances(points);
    let min_pt = new point(1, 1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < m; j++) {
            pt.x = i;
            pt.y = j;
            let distance = pt.calculate_sum_of_distances(points);
            if (distance < min_distance) {
                min_distance = distance;
                min_pt.x = pt.x;
                min_pt.y = pt.y;
            }
        }
    }
    return min_pt;
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

let shortest_distance_travelled_2 = function(m, points) {
    let min_pt = new point(0, 0);
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

    // initialize the min_pt to centroid
    min_pt.x = centroid.x;
    min_pt.y = centroid.y;

    let min_distance = min_pt.calculate_sum_of_distances(points);

    // checking points surrounding the potential centroid
    for (let i = min_pt.x - 1; i < min_pt.x + 2; i++) {
        for (let j = min_pt.y - 1; j < min_pt.y + 2; j++) {
            if (i < 1 || j > m) {
                continue;
            }

            let pt = new point(i, j);
            let distance = pt.calculate_sum_of_distances(points);
            if (distance < min_distance) {
                min_distance = distance;
                min_pt.x = pt.x;
                min_pt.y = pt.y;
            }
        }
    }
    return min_pt;
};