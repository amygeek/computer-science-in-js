

let BinarySearch = {
    
    searchRec (arr, data, low, high) {
      if (low > high) {
        return -1;
      }

      let mid = Math.floor( ( high + low ) / 2 );
      if ( arr[mid] === data ) {
        return mid;
      } else if ( arr[mid] < data) {
        return this.searchRec( arr, data, (mid + 1), high );
        
      } else {
        return this.searchRec( arr, data, low, (mid - 1) );
      }
    
      return -1;
    },
        
    searchIterative (arr, data) {
  
      let low = 0;
      let high = arr.length - 1;
      while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] === data) {
            return mid;
        } else if (arr[mid] < data) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
      }

      return -1;
    }
}

export default BinarySearch;