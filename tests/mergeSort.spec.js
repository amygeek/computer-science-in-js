import mergeSort from '../src/js/MergeSort';

describe('Selection Sort Algorithms', function () {

    let mSort;

    beforeEach(()=>{
        mSort = new mergeSort([8, 6, 3, 1, 4, 7, 5, 2]);
    });

    it('should return a unsorted array', ()=>{
        
        expect(mSort.data).toEqual([8, 6, 3, 1, 4, 7, 5, 2]);
    });
    
    it('should return a sorted array', ()=>{
        
        mSort.mergeSort(mSort.data);
        
        expect(mSort.data).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    
});