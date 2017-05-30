import Matrix from '../src/js/Matrix';

describe ("Testing Matrix", () => {
    
    let matrix = null;
    
    beforeEach( () => {
        matrix = new Matrix();
    });
    
    it('shoud check if it is valid grid', () => {
        expect(matrix.isValid(matrix.g, 2, 2)).toBe(true);
        expect(matrix.isValid(matrix.g, 2, 4)).toBe(false);
    });
    
    it('shoud sum the total value around the grid of a given value, but the given value is not including in the sum', () => {
        expect(matrix.sumAround(matrix.g, 2, 2)).toBe(29);
        expect(matrix.sumAround(matrix.g, 1, 1)).toBe(24);
    });
    
    it('shoud add all the number in the grid', () => {
        expect(matrix.addAll(matrix.g)).toBe(78);
    });
    
    it('return number of columns that contain a value', () => {
        expect(matrix.numColsWith(matrix.g, 8)).toBe(1);
    });
    
    it('shoud check how many nagitive numbers in the grid', () => {
        
        let g = [
            [-3, -2, -1,  1],
            [-2,  2,  3,  4],
            [4,   5,  7,  8]
        ]
        
        expect(matrix.countNegative(g, g.length, g[0].length)).toBe(4);
    });
});