
class Point {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}
class MazePath {

    constructor(m) {
        this.arr = m;
        this.path = [];
        this.map = new Map();
        this.size = m.length;
    }

    isFree( x, y ) {
        if (this.arr[x][y] === 0 ) {
            return false;
        }
        return true;
    }
    getPath( x, y ) {

        if ( x < 0 || y < 0 || !this.isFree( x, y)) {
            return false;
        }

        let p = new Point(x, y);

        if ( this.map.get(p) ) {
            return this.map.get(p);
        }

        let isOrigin = ( x === 0 && y === 0) ? true : false;
        let success = false;

        if ( isOrigin || this.getPath( x - 1, y) || this.getPath( x, y-1)) {

            this.path.push(p);
            this.map.set(p, true);
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

let arr = [
            [2, 5, 5, 0],
            [1, 1, 3, 1],
            [3, 4, 2, 4],
            [1, 4, 0, 4]];

let mazePath = new MazePath(arr);

let n = arr.length - 1;
mazePath.getPath(n, n );
mazePath.printPath( mazePath.path );  //( 0, 0 )( 0, 1 )( 0, 2 )( 1, 2 )( 1, 3 )( 2, 3 )( 3, 3 )