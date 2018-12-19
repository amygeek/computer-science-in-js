// find kth clostest points to the origin

let calDist = (p) => {
    return Math.sqrt( p[0] * p[0] + p[1] * p[1]);
}

let getDist = (points) => {
    let res = [];
    let n = points.length;
    for (let i=0; i<n; i++) {
        let dist = calDist(points[i]);
        res.push([points[i], dist]);
    }
    return res;
}

let kthSmallestDist = (points, k) => {
    let dists = getDist(points);
    dists.sort((a, b) => a[1] - b[1]);
    let res = [];
    for (let i=0; i<k; i++) {
        res.push(dists[i][0]);
    }
    return res;
}

let points = [[-2, 4], [0, -2], [-1, 0], [2, 5], [-2, -3], [3, 2]]
let getKthSmallest = kthSmallestDist(points, 2);

console.log(getKthSmallest);