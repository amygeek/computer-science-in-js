import findPair from '../src/js/FindPair';

describe('find a pair with given sum in an unsorted array of integers', function () {

    let fPair;

    beforeEach(()=>{
        fPair = new findPair();
    });

    it('should return Pair found', ()=>{
        
        let arr = [8, 7, 2, 5, 3, 1];
        
        let output = fPair.findPair(arr, 10);
        
        expect(output).toBe('Pair found at index 0 and 2');
    });
    
    
});