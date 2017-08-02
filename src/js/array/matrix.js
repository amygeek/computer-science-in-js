let m = [
    [2, 4, 9, 13],
    [3, 5, 11, 18],
    [6, 8, 16, 21],
    [9, 11, 20, 25]
];

let search = (grid, v) => {
    let cols = grid[0].length - 1;
    let rows = 0;

    while (cols >=0 && rows < grid.length) {
        if ( grid[rows][cols] === v ) {
            return [rows, cols];
        } else if ( grid[rows][cols] < v ) {
            rows++;
        } else if ( grid[rows][cols] > v ) {
            cols--
        }
    }

    return -1;
};

console.log(search(m, 18));