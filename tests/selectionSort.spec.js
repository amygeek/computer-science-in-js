import selectionSort from '../src/js/SelectionSort';

describe('Selection Sort Algorithms', function () {

    let sSort;

    beforeEach(()=>{
        sSort = new selectionSort([8, 6, 3, 1, 4, 7, 5, 2]);
    });

    it('should return a unsorted array', ()=>{
        
        expect(sSort.data).toEqual([8, 6, 3, 1, 4, 7, 5, 2]);
    });
    
    it('should return a sorted array', ()=>{
        
        sSort.selectionSort();
        
        expect(sSort.data).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    
});