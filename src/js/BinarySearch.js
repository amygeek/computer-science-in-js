

let BinarySearch = {
    
    searchRec (arr, search, low, high) {
      if (low > high) {
        return -1;
      }

      let mid = Math.floor( ( high + low ) / 2 );
      if ( arr[mid] === search ) {
        return mid;
      } else if ( arr[mid] < search) {
        return this.searchRec( arr, search, (mid + 1), high );
        
      } else {
        return this.searchRec( arr, search, low, (mid - 1) );
      }
    
      return -1;
    },
        
    searchIterative (arr, search) {
  
      let low = 0;
      let high = arr.length - 1;
      while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] === search) {
            return mid;
        }

        if (arr[mid] < search) {
            low = mid + 1;
          
        } else {
            high = mid - 1;
        }
      }

      return -1;
    }
}

export default BinarySearch;