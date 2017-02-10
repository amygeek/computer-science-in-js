import quickSort from '../src/js/QuickSort';

describe('Quick Sort Algorithms', function () {

    let qSort;

    beforeEach(()=>{
        qSort = new quickSort([8, 6, 3, 1, 4, 7, 5, 2]);
    });

    it('should return a unsorted array', ()=>{
        
        expect(qSort.data).toEqual([8, 6, 3, 1, 4, 7, 5, 2]);
    });
    
    it('should return a sorted array', ()=>{
        
        qSort.quickSort(qSort.data, 0, qSort.data.length - 1);
        
        expect(qSort.data).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    
});