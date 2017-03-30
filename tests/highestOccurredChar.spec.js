import highestOccurredChar from '../src/js/highestOccurredChar';

describe('return highest occurred character in a String', function () {

    

    it('should return highest occurred character in a String', ()=>{
        
        let s = 'aaaaaaaaaaaaaaaaaabbbbcddddeeeeee';
        
        let output = highestOccurredChar(s);
	
        expect(output).toBe('a');
    });
    
    
});