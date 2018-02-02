//string compression using the count of repeating chars aabccccaaa  -> a2b1c4a3
class Compression {

    count( str ) {

        if ( !str || str.length === 0 ) {
            return 0;
        }
        let len = str.length;
        let last = str.charAt(0);
        let count = 1;
        let size = 0;

        for( let i=1; i<len; i++ ) {
            if ( str.charAt(i) === last ) {
                count++;
            } else {
                size += 1 + String(count).length;
                last = str.charAt(i);
                count = 1;
            }
        }
        size += 1 + String(count).length;  //add last char count
        return size;
    }

    compress ( str ) {
        let size = this.count( str );

        let len = str.length;
        if ( size >= len ) {
            return str;
        }

        let arr = [];
        let last = str.charAt(0);
        let count = 1;
        let index = 0;

        for ( let i=1; i<len; i++ ) {
            if ( str.charAt(i) === last ) {
                count++;
            } else {
                index = this.setChar( arr, last, index, count );
                last = str.charAt(i);
                count = 1;
            }
        }

        index = this.setChar( arr, last, index, count );

        return arr.join('');
    }

    setChar( arr, char, index, count ) {
        arr[index] = char;
        index++;

        count = String(count);
        for (let c of count ) {
            arr[index] = c;
            index++;
        }
        return index;
    }
}

let str = "aabccccaaa";

let C = new Compression();

console.log(C.compress(str));