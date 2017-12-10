let searchR = ( strings, left, right, str) => {
    if ( left > right ) {
        return -1;
    }

    let mid = Math.floor( (left + right ) / 2 );
    if ( strings[mid] === '' ) {
        let low = mid -1;
        let high = mid + 1;
        while (true) {
            if ( low < left || high > right ) {
                return -1;
            } else if ( low >= left && strings[low] !== '' ) {
                mid = low;
                break;
            } else if ( high <= right && strings[high] !== '') {
                mid = high;
                break;
            }
            low--;
            high++;
        }
    }

    if (strings[mid] === str ) {
        return mid;
    } else if (strings[mid].localeCompare(str) < 0 ) {
        return searchR(strings, mid + 1, right, str);
    } else {
        return searchR(strings, left, mid - 1, str);
    }

}

let searchI = (strings, left, right, str) => {

    while (left <= right) {
        let mid = Math.floor( (left + right) / 2 );
        if (strings[mid] === '' ) {
            let low = mid -1;
            let high = mid + 1;
            while ( true ) {
                if ( low < left || high > right ) {
                    return -1;
                } else if ( low >= left && strings[low] !== '' ) {
                    mid = low;
                    break;
                } else if ( high <= right && strings[high] !== '') {
                    mid = high;
                    break;
                }
                low--;
                high++;

            }

        }
        if ( strings[mid] === str ) {
            return mid;
        } else if ( strings[mid].localeCompare(str) < 0 ) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return -1;

}

let search = (strings, str) => {
    
    if ( !str || strings.length === 0) {
        return -1;
    }
    return searchI(strings, 0, strings.length, str);
}

let stringList = ["apple", "", "", "banana", "", "", "", "carrot", "duck", "", "", "eel", "", "flower"];

console.log(search(stringList, 'banana') );