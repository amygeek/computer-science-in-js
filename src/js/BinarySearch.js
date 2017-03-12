

let BinarySearch = {
    
    searchRec (a, key, low, high) {
      if (low > high) {
        return -1;
      }

      let mid = Math.floor((high + low) / 2);
      if (a[mid] === key) {
        return mid;
      } else if (key < a[mid]) {
        return this.searchRec(a, key, low, (mid - 1));
      } else {
        return this.searchRec(a, key, (mid + 1), high);
      }
    
      return -1;
    },
        
    searchIterative (a, key) {
  
      let low = 0;
      let high = a.length - 1;
      while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (a[mid] === key) {
          return mid;
        }

        if (key < a[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return -1;
    }
}

export default BinarySearch;