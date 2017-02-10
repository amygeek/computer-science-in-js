import balancedParentheses from '../src/js/BalancedParentheses';

describe('BalancedParentheses', function () {

    let checkBalancedParentheses;

    beforeEach(()=>{
        checkBalancedParentheses = new balancedParentheses();
    });

    it('([]) should return true', ()=>{
        
        checkBalancedParentheses = new balancedParentheses("([])");
        expect(checkBalancedParentheses.areBalanced()).toEqual(true);
    });
    
    it('{(}) should return false', ()=>{
        
        checkBalancedParentheses = new balancedParentheses("{(})");
        expect(checkBalancedParentheses.areBalanced()).toEqual(false);
    });
});