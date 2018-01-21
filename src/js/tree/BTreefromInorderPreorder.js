

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BTreefromInorderPreorder {

    constructor() {
        this.pIndex = 0;
    }

    makeBTree(inOrder, preOrder, start, end ){

        if ( start > end ){
            return null;
        }
            
        let root = new Node( preOrder[this.pIndex] );
        this.pIndex++;
        
        if( start == end ){
            return root;
        }
        let index = this.getInorderIndex(inOrder, start, end, root.data);
        root.left = this.makeBTree(inOrder,preOrder,start, index-1);
        root.right = this.makeBTree(inOrder,preOrder,index+1, end);
        
        return root;
    }
    getInorderIndex(inOrder, start, end, data){
    
        for (let i=start;i<=end;i++) {
            if( inOrder[i] == data ){
                return i;
            }
        }
        return -1;
    }

    printInOrder( root){

        if(root!=null){
            this.printInOrder(root.left);
            console.log("  " + root.data);
            this.printInOrder(root.right);
        }
    }

}

let inOrder = [2,5,6,10,12,14,15];
let preOrder = [10,5,2,6,14,12,15];

let tree = new BTreefromInorderPreorder();

let x = tree.makeBTree(inOrder, preOrder, 0, inOrder.length-1);

console.log("Constructed Tree : ");
tree.printInOrder(x);
