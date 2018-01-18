
class Point {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}
class MazePath {

    constructor(m) {
        this.maze = m;
        this.path = [];
        this.map = new Map();
        this.size = m.length;
    }

    isFree( x, y ) {
        if (this.maze[x][y] === 0 ) {
            return false;
        }
        return true;
    }
    getPath( x, y, path, map ) {

        if ( x < 0 || y < 0 || !this.isFree( x, y)) {
            return false;
        }

        let p = new Point(x, y);

        if ( map.get(p) ) {
            return map.get(p);
        }

        let isOrigin = ( x === 0 && y === 0) ? true : false;
        let success = false;

        if ( isOrigin || this.getPath( x - 1, y, path, map) || this.getPath( x, y-1, path, map)) {
            path.push(p);
            map.set(p, true);
            success = true;
        }
        return success;
    }

    printPath( path ) {
        let n = path.length;

        if ( n === 0 ) {
            return;
        }
        let str = " ";
        for ( let i=0; i<n; i++) {
            str += `( ${path[i].x}, ${path[i].y} )`;
        }
        console.log(str);
    }
}

let maze = [
            [2, 5, 5, 0],
            [1, 1, 3, 1],
            [3, 4, 2, 4],
            [1, 4, 0, 4]];

let mazePath = new MazePath(maze);
let path = [];
let map = new Map();

let n = maze.length - 1;
mazePath.getPath(n, n, path, map );
mazePath.printPath( path );  //( 0, 0 )( 0, 1 )( 0, 2 )( 1, 2 )( 1, 3 )( 2, 3 )( 3, 3 )