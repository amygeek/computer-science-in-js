import BinarySearch from '../src/js/BinarySearch';

describe("Binary Search", () => {
    
    let binarySearch
    let arr = [1,2,3,4,5,6,7,8,9,10];
    
    beforeEach( ()=> {
        binarySearch = BinarySearch;
    });
    
    afterEach( ()=> {
        binarySearch = null;
    })
    
    it("should run binary search recursively", () => {
        
        let low = 0;
        let high = arr.length - 1;
        
        let i = binarySearch.searchRec( arr, 7, low, high );
        expect(i).toBe( 6 );  //found 7 at index 6
        
        i = binarySearch.searchRec( arr, 1, low, high );
        expect(i).toBe( 0 );  //found 1 at index 0;
        
        i = binarySearch.searchRec( arr, 88, low, high );
        expect(i).toBe( -1 );  //not found 88 
        
    });
    
    it("should run binary search iteratively", () => {
        
        let i = binarySearch.searchIterative(arr, 7);
        expect(i).toBe(6);  //found 7 at index 6
        
        i = binarySearch.searchIterative( arr, 1);
        expect(i).toBe(0);  //found 1 at index 0;
        
         i = binarySearch.searchIterative( arr, 88);
        expect(i).toBe( -1);  //not found 88 
    });
}); 
