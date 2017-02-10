import stackStore from '../src/js/StackStore';

describe('Stack Data Structure', function () {

    let data;

    beforeEach(()=>{
        data = new stackStore();
        
        data.push("David"); 
        data.push("Raymond"); 
        data.push("Bryan");
    });
    
    it('should return 3', ()=>{
        expect(data.length()).toEqual(3);
    });
    
    it('the popped element should be Bryan', ()=>{
        expect(data.peek()).toEqual('Bryan');
    });
    
    it('should return Raymond', ()=>{
        data.pop();
        expect(data.peek()).toEqual('Raymond');
    });
    
    it('should be empty', ()=>{
        data.pop();
        data.pop();
        data.pop();
        expect(data.isEmpty()).toBeTruthy();
    });
});